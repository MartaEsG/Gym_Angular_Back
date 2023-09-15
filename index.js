
const express = require("express")
const dotenv = require("dotenv").config()

const classRouter = require("./src/api/routes/class.route")
const coachsRouter = require("./src/api/routes/coachs.route")
const usersRouter = require("./src/api/routes/users.route")

const {connect} = require("./src/utils/db")
connect()

let cors = require("cors");


const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json())

app.use("/class", classRouter)
app.use("/coachs", coachsRouter)
app.use("/users", usersRouter)


app.listen(PORT,() => console.log(`escuchando en el puerto http://localhost:${PORT}`))

