const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/proxy', async (req, res) => {
    const sheetUrl = 'https://docs.google.com/spreadsheets/d/10p2i0axdpEiXCtqtAOhf13kQV3iladroDpXlPNr8eFQ/gviz/tq?tqx=out:json';

    try {
        const response = await fetch(sheetUrl);
        const text = await response.text();
        res.send(text);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

// Export the app as a function for Vercel serverless
module.exports = app;