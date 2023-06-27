import mongoose from "mongoose";
import express from "express";
import userRoute from "./routes/userRoute.js";
import dotenv from "dotenv";

const app = express();
const port = 3006;

app.use(express.json())

dotenv.config()

const connectiontoDB = async() => {
    try {
        await mongoose.connect(
            process.env.MONGODB_URL
            );
        console.log('Connection to DB is successful');
    } catch (error) {
        console.log(error);
    }
};

//const Student = mongoose.model('Student', studentSchema);

app.use('/', userRoute)

app.listen(port, () => {
    connectiontoDB()
    console.log(`Server started on port: ${port}`);
});