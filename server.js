const express = require('express');
const app = express();

const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set("strictQuery", false);
const routes = require('./TaskRoutes');
const cors = require('cors');

const PORT = 7000 || process.env.port;
app.use(express.json())
app.use(cors())
mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('We were connected to MongoDB'))
.catch((err) => console.log(err))
app.use(routes);

app.listen(PORT, () => {
    console.log(`I am listenning on PORT ${PORT}`)
})

