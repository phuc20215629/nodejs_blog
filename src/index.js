const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes/index');

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Apply middleware
app.use(
  express.urlencoded({
    extended: true,
  }),
); //for form submit
app.use(express.json()); // for js submit

//HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log('Path ' + path.join(__dirname, 'resources/views'));

//Routes init
route(app);

          app.listen(port, () =>
            console.log(`Example app listening at http://localhost:${port}`),
          );
