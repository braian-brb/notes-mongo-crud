import { Router } from 'express'
import { indexCtrl } from '../controllers/index.controllers.js'
const {renderIndex, renderAbout } = indexCtrl

export const router = Router();


router.get('/', renderIndex)

router.get('/about', renderAbout)