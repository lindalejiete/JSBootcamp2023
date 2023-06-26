import mongoose from "mongoose";
import express from "express";
import studentRoute from "./routes/studentRoute.js";

const app = express();
const port = 3005;

app.use(express.json())

const connectiontoDB = async() => {
    try {
        await mongoose.connect(
            'mongodb+srv://LindaLejiete:Zimbro2005@cluster0.twrzpqi.mongodb.net/students'
            );
        console.log('Connection to DB is successful');
    } catch (error) {
        console.log(error);
    }
};

//const Student = mongoose.model('Student', studentSchema);

app.use('/', studentRoute)

app.listen(port, () => {
    connectiontoDB()
    console.log(`Server started on port: ${port}`);
});


/*
Otrs veids kā savienoties ar Mongo datubāzi

const connectiontoDB = () => {
    mongoose
    .connect('mongodb+srv://LindaLejiete:Zimbro2005@cluster0.twrzpqi.mongodb.net/')
    .then(() => {
        console.log('Connection to DB is successful');
    })
    .catch((error) => {
        console.log(error);
    })
}*/