import fetch from 'node-fetch';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});
