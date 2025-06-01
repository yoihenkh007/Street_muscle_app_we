const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Dummy user for demonstration
const USER = { email: 'test@example.com', password: 'password123' };

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // Serve static files (HTML, CSS, etc.)

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === USER.email && password === USER.password) {
    // Redirect to profile page on success
    res.redirect('/profile_home.html');
  } else {
    // Redirect back to login with error
    res.redirect('/log_in_page.html?error=1');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});