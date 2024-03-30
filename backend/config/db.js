import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("");
        console.log(`mongo db connected:: `)
    }catch(error){
        console.log(`Error is :: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;
