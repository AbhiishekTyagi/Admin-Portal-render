import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const URI=process.env.MONGODB_URI;

const connectDB= async()=>{
    try{
     await mongoose.connect(URI);
     console.log("Connections Successful to DB");
    }
    catch(error)
    {
      console.error("DataBase Connection failed");
      process.exit(0);
    }
};
export default connectDB;
