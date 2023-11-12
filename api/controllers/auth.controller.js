import User from "../models/user.js";
import bcrypt from "bcryptjs";
import {errorHandler} from "../utils/error.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });

    try {
        await newUser.save();
        res.status(201).json("User created successfully!");
    } catch (error) {
        console.log('[SIGNUP_CONTROLLER_ERROR]: ', error);
        console.log(error.code)
        if (error.code === 11000) {
            error.statusCode = 400;
            error.message = 'User is already exist!'
        }
        next(error);
    }

}

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(401, "Wrong credentials!"));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, "Wrong credentials!"));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...secureUser} = validUser._doc;
        res.cookie("access_token", token, { httpOnly: true })
            .status(200)
            .json(secureUser);
    } catch (error) {
        next(error);
    }
}