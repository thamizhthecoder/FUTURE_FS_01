const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const readJson = (file) => {
    const filePath = path.join(__dirname, 'data', file);
    if (!fs.existsSync(filePath)) return [];
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const writeJson = (file, data) => {
    const filePath = path.join(__dirname, 'data', file);
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

app.listen(PORT, () => {
    console.log(`Server v2 running on http://localhost:${PORT}`);
});
