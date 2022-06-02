import {app} from './server.js'



const PORT = app.get('PORT');

app.listen(PORT, ()=>{
    console.log(`http://localhost:8080`)
})