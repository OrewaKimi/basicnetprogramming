const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
require('./routes')(app);

// Start server
app.listen(3224, () => {
  console.log('Server started on port 3224');
});
