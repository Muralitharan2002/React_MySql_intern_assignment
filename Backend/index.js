require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const route = require('./routes/user.route')

const PORT = process.env.PORT;

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(express.json())

app.get('/', (req, res) => {
    res.send("server running...")
})

app.use("/user", route)

app.listen(PORT, () => {
    console.log("server Listening....")
})
