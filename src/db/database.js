import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() => {
    try {
        const connectionCheck = await mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n mongoDB connected !! DB Host ${connectionCheck.connection.host}`);
        // console.log(connectionCheck)
    } catch (err) {
        console.log("MondoDB connection Failed", err)
        process.exit(1)
    }
}

export default connectDB