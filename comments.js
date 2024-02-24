// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a new comment
app.post('/comments', (req, res) => {
  res.send('Create a new comment');
});

// Get all comments
app.get('/comments', (req, res) => {
  res.send('Get all comments');
});

// Get a comment by ID
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get a comment by ID: ${id}`);
});

// Update a comment by ID
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update a comment by ID: ${id}`);
});

// Delete a comment by ID
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete a comment by ID: ${id}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Test with cURL
// Create a new comment
// $ curl -X POST http://localhost:3000/comments
// Get all comments
// $ curl http://localhost:3000/comments
// Get a comment by ID
// $ curl http://localhost:3000/comments/1
// Update a comment by ID
// $ curl -X PUT http://localhost:3000/comments/1
// Delete a comment by ID
// $ curl -X DELETE http://localhost:3000/comments/1
```

## 3.2. Express Middleware

- Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.
- Middleware functions can perform the following tasks:
  - Execute any code.
  - Make changes to the request and the response objects.
  - End the request-response cycle.
  - Call the next middleware function in the stack.
- If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

```javascript
// Path: middleware.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Define a middleware function
const