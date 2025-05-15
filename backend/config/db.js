import mongoose from 'mongoose';

<<<<<<< HEAD
=======
// to connect to the database
>>>>>>> 128ad7bf8ea78ea8bf20b241a75a14c1b5232174
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI,);
    console.log(`MongoDB connected ${conn.connection.host}:${conn.connection.port}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
}