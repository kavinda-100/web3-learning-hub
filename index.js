const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/blockchain-overview", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'blockchain-overview-page.html'));
});

app.get("/blockchain-terminologies", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'blockchain-terminologies-page.html'));
});

app.get("/erc-tokens", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'erc-tokens-page.html'));
});

app.get("/defi-overview", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'defi-overview-page.html'));
});
app.get("/chainlink-oracles-overview", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'chainlink-oracles-overview-page.html'));
});

// 404 handler - must be last
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'not-found.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

