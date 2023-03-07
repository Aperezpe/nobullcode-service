import dotenv from 'dotenv';

// Loads variables from .env file in development mode
export default function dontenvConfig () {
  if (process.env.NODE_ENV !== 'production') {
    dotenv.config({ path: 'dev.env' });
  }
}