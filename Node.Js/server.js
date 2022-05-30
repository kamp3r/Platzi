import express from 'express';
import 'dotenv/config';
import { config } from './config.js';
import { connect } from './db.js';
import { routesAPI } from './src/network/routes.js';
import { Server as HTTPServer } from 'http';
import { connect as socketConnect } from './socket.js';

const app = express();
const httpServer = new HTTPServer(app);
socketConnect(httpServer);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connect(process.env.DB);
routesAPI(app);

app.use('/'+config.publicRoute, express.static('public'));

httpServer.listen(config.port, () => {
  console.log(`El servidor se encuentra runneando en ${config.host}:${config.port}`);
});
