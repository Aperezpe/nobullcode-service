import express, { Express, NextFunction, Request, Response } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import createError from 'http-errors';
// const swaggerJsDocs = require('swagger-jsdoc');
import swaggerJsDocs, { OAS3Options, Options, SwaggerDefinition } from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import indexRouter from './routes/index';
import postsRouter from './routes/posts';
import userRouter from './routes/users';


const app = express();

// Loads variables from .env file in development mode
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
} else {
  // Loads variables from .env.prod file in production mode
  dotenv.config({ path: '.env.prod' });
}


// Declares swagger definition and apis to document
const options: OAS3Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'nobullcode-blog service',
      description: 'API used for No Bull Code Blog',
      version: '1.0.0'
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
        description: 'Development Server'
      }
    ]
  },
  apis: [
    './src/swagger-docs/*.yaml'
  ],

};


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

const swaggerSpec = swaggerJsDocs(options);
app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', indexRouter);
app.use('/posts', postsRouter);
app.use('/users', userRouter);

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
