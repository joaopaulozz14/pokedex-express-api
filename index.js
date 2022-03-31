import dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import path from 'path';
const app = express();
//const routes = require('./src/routes/routes');
import { routes } from './src/routes/routes.js';

const ___dirname = path.resolve(path.dirname(''));


app.set('view engine', 'ejs');
app.use(express.static(path.join(___dirname, 'public')));
app.use(express.urlencoded());
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => 
    console.log(`Servidor rodando na porta ${port}`)
);