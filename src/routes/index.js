
const homeRouter = require('./home');
const userRouter = require('./user');
function route(app){
     
     app.use('/', homeRouter);
     app.use('/users', userRouter); // Thêm router admin
}

module.exports = route;
