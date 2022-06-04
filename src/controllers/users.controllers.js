export const usersCtrl = {};
import User from '../models/User.js';

usersCtrl.renderSignUpForm = (req, res) => {
  res.render('users/signup');
};

usersCtrl.signUp = async (req, res) => {
  const { name, email, password, confirm_password } = req.body;
  const errors = [];
  if (password != confirm_password) {
    errors.push({
      text: 'Passwords do not match.',
    });
  }
  if (password.length < 4) {
    errors.push({
      text: 'Password must be at least 4 characters.',
    });
  }
  if (errors.length > 0) {
    res.render('users/signup', {
      errors,
      name,
      email,
      password,
      confirm_password,
    });
  } else {
    const emailUser = await User.findOne({ email: email });
    /* No trae el email, trae todo el objecto que coincide con ese email */
    if (emailUser) {
      req.flash('error_msg', 'The email is alredy taken');
      /* Corregir para que le deje los datos en el form */
      res.redirect('/users/signup');
    } else {
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptPassword(password)
      await newUser.save();
      req.flash('success_msg', 'You are registered')
      res.redirect('/users/signin');
    }
  }
};

usersCtrl.renderSignInForm = (req, res) => {
  res.render('users/signin');
};

usersCtrl.signIn = (req, res) => {
  res.send('singin');
};

usersCtrl.logout = (req, res) => {
  res.send('logout');
};
