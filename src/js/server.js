const express = require('express');
const app = express();
const path = require('path');

// Melayani file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Server jalan di http://localhost:3000');
});
