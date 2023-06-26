import mongoose from "mongoose";
import express from "express";
import userRoute from "./routes/userRoute.js";

const app = express();
const port = 3006;

app.use(express.json())

const connectiontoDB = async() => {
    try {
        await mongoose.connect(
            'mongodb+srv://LindaLejiete:Zimbro2005@cluster0.twrzpqi.mongodb.net/users'
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