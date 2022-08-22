import 'dotenv/config'

export const EXPRESS_HEADERS_TIMEOUT = process.env.EXPRESS_HEADERS_TIMEOUT || 65000;

export const EXPRESS_KEEP_ALIVE_TIMEOUT = process.env.EXPRESS_KEEP_ALIVE_TIMEOUT || 61000;

export const API_PORT = process.env.API_PORT || 3000;

export const POSTGRES_HOST = process.env.POSTGRES_HOST || 'localhost';

export const POSTGRES_USER = process.env.POSTGRES_USER;

export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;

export const POSTGRES_PORT = process.env.POSTGRES_PORT || '5432';

export const POSTGRES_DATABASE = process.env.POSTGRES_DATABASE;

export const POSTGRES_SCHEMA = process.env.POSTGRES_DATABASE_SCHEMA || 'public';

