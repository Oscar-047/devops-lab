const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Existing endpoint
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from DevOps Lab Backend!' });
});

// New endpoint: returns a list of stories (hardcoded)
app.get('/api/stories', (req, res) => {
    const stories = [
    { id: 1, title: 'My First Story', content: 'Once upon a time...' },
    { id: 2, title: 'Another Story', content: 'In a galaxy far away...' },
    { id: 3, title: 'The DevOps Journey', content: 'Learning CI/CD step by step...' }
];
    res.json(stories);
});

// Only start the server if this file is run directly
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Backend running at http://localhost:${port}`);
    });
}

module.exports = app;