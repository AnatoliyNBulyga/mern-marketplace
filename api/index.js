import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to MongoDB!"))
    .catch((err) => console.log(err));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.use((err, req, res) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});