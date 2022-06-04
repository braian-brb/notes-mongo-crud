import { Router } from 'express';
import { usersCtrl } from '../controllers/users.controllers.js';

export const router = Router();
const {
    renderSignUpForm,
    renderSignInForm,
    signUp,
    signIn,
    logout
} = usersCtrl;

router.get('/signup', renderSignUpForm);
router.post('/signup', signUp)

router.get('/signin', renderSignInForm)
router.post('/signin', signIn)

router.get('/logout', logout)