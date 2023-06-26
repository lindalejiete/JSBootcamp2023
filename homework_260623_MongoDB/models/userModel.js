import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        min: 8,
        required: true,
    },
    email: {
        type: String
    }
},{
    timestamps: true
});

export default mongoose.model("user", userSchema);