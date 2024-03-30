import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/', (req, res) => res.send('server is okay'))

app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));

// post - /api/users/ --- register a user 
// post - /api/users/auth/ - authenticate a user and get token 
// post - /api/users/logout/ - logout user and clear cookie 
// get - /api/users/profile - user profile 
// put - /api/users/profile - update profile 