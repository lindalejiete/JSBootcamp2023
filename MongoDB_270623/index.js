import mongoose from "mongoose"
import dotenv from "dotenv"
import express from "express";
import userRoute from "./routes/userRoutes.js"

const app = express();
const port = 3007;

app.use(express.json())

dotenv.config()

const connectiontoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connection to DB is successful');
    } catch (error) {
        console.log(error);
    }
};

app.use('/', userRoute)

app.listen(port, () => {
    connectiontoDB()
    console.log(`Server started on port: ${port}`);
});