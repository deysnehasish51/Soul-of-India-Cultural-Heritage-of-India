const mongoose = require('mongoose');
const dotenv = require('dotenv'); // Import the dotenv library

// Load environment variables from .env
dotenv.config();

// Define the connectDB function
const connectDB = async () => {
  try {
    const db = process.env.MONGO_URI;
    await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// Handle connection errors and open event
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Call the connectDB function to initiate the connection
connectDB();