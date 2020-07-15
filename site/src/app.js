var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session');
const usersMiddlewares = require('./middlewares/usersMiddlewares');


// Requerimiento del método Override
var methodOverride = require('method-override');

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');
var recetasRouter = require('./routes/recetas');
var tipsRouter = require('./routes/tips');
var usersRouter = require('./routes/users');
var cartRouter = require('./routes/cart');
const { cart } = require('./controllers/productsControllers');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
// Method Override
app.use(methodOverride('_method'));

app.use(session({ secret: "mensaje secreto Almazen", resave: false, saveUninitialized: true }));

app.use(usersMiddlewares.rememberUser); // cookie de inicio de sesión con check de "recordarme" activado


app.use('/', indexRouter);
app.use('/product', productsRouter);
app.use('/recetas', recetasRouter);
app.use('/tips', tipsRouter);
app.use('/users', usersRouter);
app.use('/cart', cartRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);

    return res.render('404', { usuarioLogueado: req.session.usuarioLogueado });

});

module.exports = app;