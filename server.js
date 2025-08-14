const express = require('express');
const app = express();
const port = 4000;
 // you can choose another port

// Serve static files (like index.html, CSS, JS) from the current folder
app.use(express.static(__dirname));

// Example route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Make sure index.html exists
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
