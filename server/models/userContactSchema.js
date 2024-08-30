import mongoose from "mongoose";
import validator from "validator";

const userContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
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
    tour: {
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
});


const userdb2 = new mongoose.model("contact", userContactSchema);
export default userdb2;