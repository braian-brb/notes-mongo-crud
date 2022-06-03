import {app} from './server.js'
import './database.js'


const PORT = app.get('PORT');

app.listen(PORT, ()=>{
    console.log(`http://localhost:8080`)
})