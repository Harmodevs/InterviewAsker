const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const PORT = 3000;

// Define routes here
const audioRoutes = require("./routes/audioRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "../dist")));
} else {
  app.use(express.static(path.join(__dirname, "../client")));
}

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.use("/api/audio", audioRoutes, (req, res) => {
  console.log("api/audio hit");
  return res.sendStatus(200);
});

app.use("/", (req, res) => {
  console.log("test");
  return res.sendStatus(200);
});

app.get((req, res) => {
  return res.status(404).send("Page does not exist");
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
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
