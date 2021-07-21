
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
const passport = require('passport');
const passportConfig = require("./config/server/passportConfig")


app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())
//routes

app.use("/users",require("./routes/usersRoutes"))
app.use("/safety",require("./routes/safetyRoutes"))

// add router in the Express app.

app.use("/",router)

// pass passport for configuration
passport.use(passportConfig.createStrategy())
app.use(passport.initialize())

app.listen(port,()=>{
console.log(`App listen at http:localhost:${port}`);
})

