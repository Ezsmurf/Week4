const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Array of users
const users = [
  {
    username: 'user1',
    birthdate: '1990-01-01',
    age: 30,
    email: 'user1@example.com',
    password: 'password1',
    valid: true
  },
  {
    username: 'user2',
    birthdate: '1985-05-05',
    age: 35,
    email: 'user2@example.com',
    password: 'password2',
    valid: true
  },
  {
    username: 'user3',
    birthdate: '2000-10-10',
    age: 20,
    email: 'user3@example.com',
    password: 'password3',
    valid: false
  }
];

// Route for handling login
app.post('/api/auth', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // Do not send back the password
    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  } else {
    res.status(401).json({ valid: false, message: 'Invalid credentials' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
