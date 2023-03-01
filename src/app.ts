import express, { Express, NextFunction, Request, Response } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import createError from 'http-errors';

import indexRouter from './routes/index';
import postsRouter from './routes/posts';

// Loads variables from .env file in development mode
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
} else {
  // Loads variables from .env.prod file in production mode
  dotenv.config({ path: '.env.prod' });
}

const app: Express = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/posts', postsRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');

});

export default app;
