const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

const toDoList = require('./routes/toDoList.routes');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(toDoList);

app.set('port', 5000);

app.listen(app.get('port'), () => console.log(`Server running on port : ${app.get('port')}...`));