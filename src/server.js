import express from 'express'
import {json, urlencoded} from 'express'
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';

//--------------------------------------------- INITIALIZATIONS ------------------------------------------------------

export const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
//--------------------------------------------- SETTINGS ------------------------------------------------------
app.set('PORT', process.env.PORT || 8080)
app.set('views', path.join(__dirname, 'views'))

//--------------------------------------------- MIDDLEWARES  ------------------------------------------------------
app.use(urlencoded({extended: false}))
app.use(json())

//--------------------------------------------- GLOBAL VAR ------------------------------------------------------


//--------------------------------------------- ROUTES  ------------------------------------------------------
app.get('/', (req, res) =>{
    res.send('Hello')
})

//--------------------------------------------- STATIC FILES  ------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')))