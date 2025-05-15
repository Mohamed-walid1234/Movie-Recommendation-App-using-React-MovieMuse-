import mongoose from 'mongoose';

// to connect to the database
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI,);
    console.log(`MongoDB connected ${conn.connection.host}:${conn.connection.port}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
}