import passport from 'passport'
import { Strategy as LocalStrategy } from "passport-local";
import User from '../models/User.js'

export default passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async (email, password, done) =>{
    //Match email's
    const user = await User.findOne({email})
    if(!user){
        return done(null, false, {message: 'Not user found'})
    } else {
        //match pass
        const matchBool = await user.matchPassword(password)
        if(!matchBool){
            return done (null, false, {message: 'Incorrect Password'})
        }else {
            return done(null, user)
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) =>{
        done(err, user);
    })
    //Se puede hacer con async await tambien
})