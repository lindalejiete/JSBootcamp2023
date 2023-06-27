import userModel from "../models/userModel.js"

export const createUser = async (req, res) => {
    try {
        const newUser = new userModel({
            userName: req.body.userName,
            password: req.body.password
        });
    
        await newUser.save();

        const { password, ...remainingUserData } = newUser._doc;

        res.status(201).json(remainingUserData);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find({}, { password: 0 })

        res.status(201).send(allUsers);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await userModel.findOne({ userName: req.body.userName}, { password: 0 })

        res.status(201).send(user);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await userModel.findOneAndDelete({ userName: req.body.userName})

        const { password, ...remainingUserData } = user._doc;

        res.status(201).send(remainingUserData);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const updateUser = async (req, res) => {
    try {
        const updatedUser = await userModel.findOneAndUpdate(
            {userName: req.body.user},
            {$set: req.body,},
            {new: true}
            );


        res.status(201).send(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const countUsers = async (req, res) => {
    try {
        const countedUser = userModel.where({ userName: req.body.userName }).count();
        userModel.count({ userName: req.body.userName }).count().exec();
        await userModel.count({ userName: req.body.userName });
        userModel.where( userName, req.body.userName ).count();

        res.status(201).send(countedUser);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

/*
const countQuery = model.where({ 'color': 'black' }).count();

query.count({ color: 'black' }).count().exec();

await query.count({ color: 'black' });

query.where('color', 'black').count();
*/