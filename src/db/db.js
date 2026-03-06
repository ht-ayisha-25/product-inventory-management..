import mongoose from "mongoose";


const connectDB = async () => {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
        console.log("MONGODB connection FAILED: MONGODB_URI is not set");
        return false;
    }

    try {
        console.log("Attempting MongoDB connection...");
        const connectionInstance = await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000,
            family: 4,
            retryWrites: true,
        });
        console.log(`✓ MongoDB connected !! Host: ${connectionInstance.connection.host}`);
        console.log(`✓ Database: ${connectionInstance.connection.name}`);
        return true;
    } catch (error) {
        console.log("✗ MONGODB connection FAILED");
        console.log("Error:", error.name);
        console.log("Message:", error.message);
        return false;
    }
}

export default connectDB