/* eslint-disable no-console */
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import winston from '@server/config/winston';

// Importando el Router principal
import router from '@server/routes/index';


// Importing configurations
import configTemplateEngine from '@s-config/template-engine';
// webpack Modules
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevConfig from '../webpack.dev.config';

// Consultar el modo de ejecucion de la aplicacion
const env = process.env.NODE_ENV || 'development';

// se crea la aplicacion express
const app = express();

// Verificando el modo de ejecucion de la aplicacion
if (env === 'development') {
  console.log('> Executing in Developmenr Mode : WebpackHotMiddleware');
  // Paso 1.Agregando la ruta del HMR
  webpackDevConfig.entry = [
    'webpack-hot-middleware/client?reload=true&timeout=1000',
    webpackDevConfig.entry,
  ];
  // Paso 2. Agregamos el plugin
  webpackDevConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

  // Paso 3. Crear el compilador de webpack
  const compiler = webpack(webpackDevConfig);

  // PAso 4. Agregando el middleware a la cadena de Middeleeares de nuestra aplicacion
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackDevConfig.output.publicPath,
    }),
  );

  // Paso 5. Agregando  el  webpack hot middleware
  app.use(webpackHotMiddleware(compiler));
} else {
  console.log('Executing in Poduction mode... ');
}

// view engine setupnpo
configTemplateEngine(app);

app.use(morgan('combined',{stream : winston.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

// instalando el enrutador principal a la aplicacion express
router.addRoutes(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  // Log
  winston.error(`Code: 404, Message: Page Not Found, URL: ${req.originalUrl}, Method: ${req.method}`);
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Loggeando con Winston
  winston.error(`status: ${err.status || 500},Message:${err.message} ,Method: ${req.method}, IP:${req.ip} `)

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
