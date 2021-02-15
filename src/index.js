const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./db');

// Initiate The App.
const app = express();
// Connect The Database
connectDB();

// Configure The App
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(cors());

// Registering The Routes
app.use('/api/logs', require('./routes/logs'));

// Not Found Middleware && Error Handler Middleware -- Should be Under any Route.
app.use(require('./errorMiddlewares').notFound);
app.use(require('./errorMiddlewares').errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`The server is Up and Running Listening to ${port}`));
