// Create web server
// Create a new web server that listens on port 3000. The server should respond with the following JSON for all requests:

// {
//   message: "Hello, World!"
// }
// The server should respond to all requests with a status code of 200.

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});