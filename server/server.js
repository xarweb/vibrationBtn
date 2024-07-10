console.log('Server is starting...');
const express = require('express');
const path = require('path');

const app = express();

// Serve the client-side files from the 'client/' directory
app.use(express.static(path.join(__dirname, '../client')));

app.get('/vibrate', (req, res) => {
  console.log('Vibration request received');
  res.json({ success: true });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



app.get('/', (req, res) => {
  console.log('Received request for root path');
  // Add your route handler code here
});
app.use((err, req, res, next) => {
  console.error('Error occurred:', err);
  res.status(500).send('Something went wrong!');
});
