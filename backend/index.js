import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/itemRoutes.js';
import cors from "cors";


const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/lostItems';

mongoose
    .connect(MONGODB_URL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    }); 

    app.use('/api', router);