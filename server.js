const express = require('express');
require("dotenv").config();
const morgan = require("morgan")
const methodOverride = require("method-override")
const cors = require('cors');
const PORT = process.env.PORT

const app = express();


const dogRouter = require('./controllers/dogapp')


//MIDDLEWare
app.use(express.json())
app.use(express.urlencoded({extended: true})) 
app.use(cors())

app.use('/dogs', dogRouter)

app.listen(PORT, () => console.log(`listening on ${PORT}!!`))