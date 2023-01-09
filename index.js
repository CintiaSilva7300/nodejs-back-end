const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');
const morgan = require('morgan');
const routes = require('./config/routes')

const app = express()

app.use(morgan('dev'))
app.use(bodyParse.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(2121, () => {
    console.log(`Express started at http://localhost:2121`)
})