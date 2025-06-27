const express = require('express');
const path = require('path');
const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index'); // renders views/index.ejs
});

app.get('/about', (req, res) => {
  res.render('about'); // renders views/about.ejs
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
