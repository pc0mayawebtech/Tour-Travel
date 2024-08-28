import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/TourTravel');
        console.log('database is connected');
    } catch (error) {
        console.log(error)
    }
};

export default connectDB;