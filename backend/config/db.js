import mongoose from"mongoose";

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://rishin07:Rm%40102003@cluster0.l08hu.mongodb.net/zaika').then(()=>console.log("DB Connected"));
}