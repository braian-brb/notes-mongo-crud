import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
},{
    timestamps: true,
})

export default model('Note', NoteSchema); // if you want use , and name of coll