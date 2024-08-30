import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://workshrunkhalmore:Chiku2015@cluster0.rnruy.mongodb.net/EatNow').then(()=>console.log("DB Connected"));
}