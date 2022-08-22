import 'dotenv/config'

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { createServer } from 'http';

import {
  EXPRESS_HEADERS_TIMEOUT,
  EXPRESS_KEEP_ALIVE_TIMEOUT,
  API_PORT,
} from './constants/Env';
import Routes from './Routes';



const app = express();
const server = createServer(app);


app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use(Routes);

server.listen(API_PORT, () => console.log(`app listening on ${API_PORT}`));

server.keepAliveTimeout = Number(EXPRESS_KEEP_ALIVE_TIMEOUT);
server.headersTimeout = Number(EXPRESS_HEADERS_TIMEOUT);

export default server;
