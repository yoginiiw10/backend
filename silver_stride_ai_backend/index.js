const express = require('express');
const cors = require('cors');  // Add this line to import the cors middleware
const app = express();
const port = 3001;

// Use cors middleware to enable CORS
app.use(cors());

app.get('/generate-number', (req, res) => {
  const generatedNumber = Math.floor(Math.random() * 1000);
  res.json({ number: generatedNumber });
});

app.listen(port, () => {
  console.log(`Silver Stride AI Backend is running at http://localhost:${port}`);
});
