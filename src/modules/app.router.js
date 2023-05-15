import userRouter from './user/user.router.js';
import blogRouter from './blog/blog.router.js';
import authRouter from './auth/auth.router.js';
import {connectDB} from '../../DB/connection.js';
import cors from 'cors';
const initApp=(app,express)=>{
app.use(express.json());
connectDB();
app.use(cors());
app.use("/user",userRouter);
app.use("/auth",authRouter);
app.use(blogRouter);

}
export default initApp;