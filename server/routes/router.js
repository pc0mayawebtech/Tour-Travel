import express from 'express';
import userdb from '../models/userSchema.js';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

//Signup API
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    console.log('name,email,password', req.body)

    if (!name || !email || !password) {
        return res.status(400).send({ error: "Please fill in all fields." });
    }

    try {
        const preuser = await userdb.findOne({ email: email });
        if (preuser) {
            return res.status(400).send({ error: "Email already in use." });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const finaluser = new userdb({ name, email, password: hashedPassword });
        const storeData = await finaluser.save();
        return res.status(200).json({ status: 200, storeData });
    } catch (error) {
        console.error("Signup error:", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
});


//Login API
router.post('/', async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

    if (!email || !password) {
        return res.status(400).json({ error: "Please fill in all fields." })
    }

    try {
        const userValid = await userdb.findOne({ email: email });
        if (!userValid) {
            return res.status(400).send({ error: "Invalid email" });
        }

        const isMatch = await bcrypt.compare(password, userValid.password)
        if (!isMatch) {
            return res.status(400).send({ error: "Invalid password" });
        }

        const tokenData = {
            email: userValid.email,
            id: userValid._id
        }

        const token = jwt.sign(tokenData, 'pawan30', { expiresIn: '1d' });
        res.cookie('usercookie', token, {
            maxAge: 900000,
            httpOnly: false,
            secure: true,
        });
        return res.status(200).json({ message: "Login Successfull", status: 200, token });
    } catch (error) {
        console.log('error', error.message);
        res.status(200).json({ message: "something is wrong", status: 400 });
    }
});


//Forgot password API
router.post('/forgotpassword', async (req, res) => {
    const { email } = req.body;
    if (!email) {
        res.status(400).json({ error: "Please fill the field" });
    }
    try {
        const user = await userdb.findOne({ email: email });
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        const tokenData = {
            email: user.email,
            id: user._id
        }

        const token = jwt.sign(tokenData, 'pawan30', { expiresIn: '1h' });
        console.log('TokenGenerated', token);
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "pawan.kumar@webwisestudio.in",
                pass: "cdtpuhiieeifyvvm",
            },
        });

        var mailOptions = {
            from: "email",
            to: email,
            subject: "Password Reset",
            text: `http://localhost:5173/resetpassword/${user._id}/${token}`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return res.json({
                    success: false,
                    message: "Email does not send. Please try again.",
                });
            } else {
                return res.json({ success: true, message: "Email send successfully." });
            }
        });
    } catch (error) {
        console.log('error', error.message);
        return res.status(500).send({ error: 'Internal server error' });
    }
});


//Reset Password 
router.post('/resetpassword/:id/:token', async (req, res) => {
    const { id, token } = req.params;
    const { password } = req.body;
    console.log(id, token, 'toekb')
    if (!password) {
        return res.status(400).json({ error: "Please fill the field" });
    }

    try {
        const decoded = jwt.verify(token, 'pawan30');
        console.log('idserver', decoded)
        if (decoded.id !== id) {
            console.log("decode errror")
            return res.status(400).send({ error: 'Invalid token or ID' });
        }

        // Find the user by ID
        const user = await userdb.findById(id);
        if (!user) {
            return res.status(400).send({ error: 'User not found' });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update the user's password and save
        user.password = hashedPassword;
        await user.save();
        return res.status(200).send({ message: 'Password reset successfully' });
    } catch (error) {
        console.log('error', error.message);
        return res.status(400).send({ error: 'Internal server error' });
    }
})

export default router;