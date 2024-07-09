const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/vibrate', (req, res) => {
  // Trigger the vibration on your partner's phone
  // Replace this with the actual vibration logic
  console.log('Vibration request received');
  res.json({ success: true });
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on port 3000');
});
