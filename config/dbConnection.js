const mongoose = require('mongoose');
const dotenv = require('dotenv'); // Import the dotenv library

// Load environment variables from the .env file
dotenv.config();

// Async function to connect to MongoDB
const connectDB = async () => {
  try {
    const db = process.env.MONGO_URI; // MongoDB connection URI from .env file
    if (!db) {
      throw new Error('MONGO_URI is not defined in the .env file.');
    }

    // Connect to MongoDB
    await mongoose.connect(db, {
      useNewUrlParser: true,  // Use the new URL parser
      useUnifiedTopology: true,  // Use the unified topology engine
    });
    console.log('✅ MongoDB connected...');
  } catch (err) {
    // Log error and terminate the process if connection fails
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1); // Exit with failure code
  }
};

// Mongoose connection instance for event handling
const db = mongoose.connection;

// Bind connection to error event for debugging
db.on('error', console.error.bind(console, '❌ MongoDB connection error:'));

// Bind connection to open event for confirmation
db.once('open', () => {
  console.log('✅ Connected to MongoDB');
});

// Call the connectDB function to establish the connection
connectDB();

module.exports = connectDB; // Export the function for reuse in other modules
