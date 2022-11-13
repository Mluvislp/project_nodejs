import morgan from 'morgan';
import express from 'express';
import path, { join ,dirname } from 'path';
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars';

import {route} from './routes/index.js';
const app = express()
const port = 3000

//define dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//check static file
app.use(express.static(path.join(__dirname,'public'))); 

app.use(morgan('combined'));

app.engine('hbs' ,engine({extname : '.hbs'}));
app.set('view engine' , 'hbs');
app.set('views',join(__dirname,'resources/views'));

route(app); 

app.listen(port)