const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'secret', 
    resave: false,
    saveUninitialized: true
  }));


// In-memory data store for users
const users = [
    { username: 'admin', password: 'password' }
  ];
  
  // Middleware for parsing request bodies
  app.use(express.json());
  
  
  // Authenticate user
  app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      // User authenticated, set the user in the session
      req.session.user = user;
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
  
  // Logout user
  app.post('/api/logout', (req, res) => {
    req.session.destroy();
    res.status(200).json({ message: 'Logout successful' });
  });
  
  // Start the server
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
  });
