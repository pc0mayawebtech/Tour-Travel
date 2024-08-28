import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid Email');
            }
        },
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    }
});

const userdb = new mongoose.model("auth", userSchema);
export default userdb;