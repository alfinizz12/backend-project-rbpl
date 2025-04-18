const express = require('express');
const cors = require('cors');
const boardRouter = require('./routes/board.route');
const taskRouter = require('./routes/task.route');
const app = express();
require('dotenv').config();

// using cors
app.use(cors());
app.use(express.json());

// using board routes
app.use('/board', boardRouter);
app.use('/task', taskRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is up on port ${process.env.PORT}`)
});