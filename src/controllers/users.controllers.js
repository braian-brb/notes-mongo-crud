export const usersCtrl = {}

usersCtrl.renderSignUpForm = (req, res) =>{
    res.render('users/signup')
}

usersCtrl.signUp = (req, res) =>{
    res.send('singup')
}


usersCtrl.renderSignInForm = (req, res) =>{
    res.render('users/signin')
}

usersCtrl.signIn = (req, res) =>{
    res.send('singin')
}

usersCtrl.logout = (req, res) =>{
    res.send('logout');
}

