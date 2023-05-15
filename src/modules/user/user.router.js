import {Router} from 'express';
const router= Router();
import * as userController from './controller/user.controller.js';
router.get('/',userController.getAllUsers);
router.patch('/update/:id',userController.updateUser);
router.delete('/delete/:id',userController.deleteUser);



export default router;