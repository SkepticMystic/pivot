import { MONGO_URI } from "$env/static/private";
import mongoose from "mongoose";

try {
    mongoose.set("strictQuery", true);
    mongoose.connect(MONGO_URI, { autoIndex: false, dbName: 'pivot' });
    console.log("Connected to MongoDB");
} catch (error) {
    console.log(error);
}
