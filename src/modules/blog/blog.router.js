import {Router} from 'express';
import * as blogController from './controller/blog.controller.js';
const router= Router();

router.get('/blog', blogController.getAllBlogs);
router.post('/blog',blogController.addBlog);
export default router;