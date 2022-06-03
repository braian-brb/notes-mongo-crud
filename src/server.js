import express from 'express'
import {json, urlencoded} from 'express'
import { engine } from 'express-handlebars'
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv'
dotenv.config();

//--------------------------------------------- INITIALIZATIONS ------------------------------------------------------

export const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
//--------------------------------------------- SETTINGS ------------------------------------------------------
app.set('PORT', process.env.PORT || 8080)
app.set('views', path.join(__dirname, 'views'))
app.engine(
    '.hbs',
    engine({
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        extname: '.hbs'

    })
)
app.set('view engine', '.hbs')

//--------------------------------------------- MIDDLEWARES  ------------------------------------------------------
app.use(urlencoded({extended: false}))
app.use(json())

//--------------------------------------------- GLOBAL VAR ------------------------------------------------------


//--------------------------------------------- ROUTES  ------------------------------------------------------
app.get('/', (req, res) =>{
    res.render('index')
})

//--------------------------------------------- STATIC FILES  ------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')))