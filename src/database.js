import mongoose from 'mongoose'


const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env

const MONGODB_URI = `${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}?retryWrites=true&w=majority`

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology:true,
    useNewUrlParser: true,
})
    .then(db => console.log('database connected: ', db.connection.name))
    .catch(err => console.log(err))