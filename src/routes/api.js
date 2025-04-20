import boardRouter from './board.route.js';
import taskRouter from './task.route.js';
import userRouter from './user.route.js';

const routes = (app) => {
    app.use('/board', boardRouter);
    app.use('/task', taskRouter);
    app.use('/user', userRouter);
}

export default routes