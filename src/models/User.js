import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import bcryptjs from 'bcryptjs';

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String, required: true
    },
    timestamps: true
})

UserSchema.methods.encryptPassword = async password =>{
    const salt = await bcryptjs.genSalt(10);
    const encryptPass = await bcryptjs.hash(password, salt)
    return encryptPass;
}

UserSchema.methods.matchPassword = function (password) {
    const resBoolean =  await bcryptjs.compare(password, this.password)
    return resBoolean;
}


export default model('User', UserSchema)