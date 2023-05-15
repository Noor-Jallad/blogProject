import {Router} from 'express';
import * as authController from './controller/auth.controller.js';
const router= Router();

router.get('/getAuth',authController.getAuth);
router.post('/signUp',authController.signUp);
router.get('/signIn',authController.signIn);

export default router;