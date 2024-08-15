const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const errorMiddleware = require('./middlewares/error');
const cookieParser = require('cookie-parser');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const products = require('./routes/product');
const auth = require('./routes/auth');
const order = require('./routes/order');
const payment = require('./routes/payment');

app.use('/api/', products);
app.use('/api/', auth);
app.use('/api/', order);
app.use('/api/', payment);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
    });
}

app.use(errorMiddleware);

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Sales Mart API');
});

// Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to unhandled rejection');
    server.close(() => {
        process.exit(1);
    });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to uncaught exception');
    server.close(() => {
        process.exit(1);
    });
});
