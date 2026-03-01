const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const readJson = (file) => {
    let filePath = path.join(__dirname, 'data', file);
    // Vercel serverless functions are read-only. Fallback to /tmp for messages writes
    if (file === 'messages.json' && process.env.VERCEL) {
        filePath = path.join('/tmp', file);
    }
    if (!fs.existsSync(filePath)) return [];
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const writeJson = (file, data) => {
    let filePath = path.join(__dirname, 'data', file);
    if (file === 'messages.json' && process.env.VERCEL) {
        filePath = path.join('/tmp', file);
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

app.get('/api/projects', (req, res) => {
    try {
        res.json(readJson('projects.json'));
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});

app.get('/api/blogs', (req, res) => {
    try {
        res.json(readJson('blogs.json'));
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch blogs' });
    }
});

app.post('/api/contact', (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing fields' });
        }
        const messages = readJson('messages.json');
        messages.push({
            id: Date.now().toString(),
            name, email, message,
            date: new Date().toISOString()
        });
        writeJson('messages.json', messages);
        res.status(201).json({ success: true, message: 'Saved successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running locally on http://localhost:${PORT}`);
    });
}

// Export the Express API for Vercel Serverless
module.exports = app;
