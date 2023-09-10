// in this application the design pattern used to create REST api is
// "resource-oriented architecture (ROA) approach"
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require('morgan')
const connectDB = require('./config/db.js')


dotenv.config({path: './config/config.env'})
connectDB();

const transactions = require('./routes/transactions');

const app = express()

app.use(express.json)

 
app.use('/api/v1/transactions', transactions)

const PORT = process.env.PORT || 9000;
// mongoose
//     .connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(async () => {
//         app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
//
//         // ADD DATA ONE TIME ONLY
//
//         // await mongoose.connection.db.dropDatabase()
//         // KPI.insertMany(kpis)
//     })
//     .catch((err) => console.log(`${err} did not connect`));

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
