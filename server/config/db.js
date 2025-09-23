import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on('connected' , () => console.log('DataBase Connect Successfully'))
    await mongoose.connect(`${process.env.MONGODB_URI}/cinemate`)
  } catch (error) {
    console.log(error.message);
    
  }
}

export default connectDB;