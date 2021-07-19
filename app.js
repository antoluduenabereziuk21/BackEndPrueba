
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

app.use("/users",require("./routes/usersRoutes") )

// add router in the Express app.
app.use("/",router)

app.listen(port,()=>{
console.log(`App listen at http:localhost:${port}`);
})

// router.get('/handle',(request, response)=>{
//     console.log(request.query);
//     response.send('get');
// })