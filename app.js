const { response } = require('express');
const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
const bodyParser = require('body-parser');


app.use("/users",require("./routes/usersRoutes") )
app.use("/",router)

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.listen(port,()=>{
    console.log(`Example app listen at http:localhost:${port}`);
})

router.get('/handle',(request, response)=>{
    console.log(request.query);
    response.send('get');
})