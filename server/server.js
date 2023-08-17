const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const PORT = 3000;

// Define routes here

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '../dist')));
} else {
  app.use(express.static(path.join(__dirname, '../client')));
}

app.use('/', (req, res) => {
  return res.sendStatus(200);
});

app.get((req, res) => {
  return res.status(404).send('Page does not exist');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: {err: 'An error occurred'},
  };
  // assign the passed in error to the error object, or give it the default error otherwise
  const errorObj = Object.assign({}, defaultErr, err);
  // return the error status as a response and send the error message in the payload
  return res.status(errorObj.status).json(errorObj.message);
});

// spin up the backend server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
