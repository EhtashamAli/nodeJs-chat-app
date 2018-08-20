const express = require ('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, '/../public')));

app.get('/' , (req,res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = app;
