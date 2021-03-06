let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');
let cors = require('cors');
require('dotenv').config();

// Express Route
const orderRoute = require('../backend/routes/order.route');
const userRoute = require('../backend/routes/user.routes');

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  .then(
    () => {
      console.log('Database sucessfully connected!');
    },
    error => {
      console.log('Could not connect to database : ' + error);
      process.exit();
    }
  );

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
app.use('/orders', orderRoute);
app.use(userRoute);

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port);
});

app.use(function(err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
