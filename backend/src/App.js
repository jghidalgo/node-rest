const express = require('express');
const app = express();

//settings port
app.set('port',process.env.POST||4000);

//Middlewares
app.use(express.json());

app.use('/', (req,res)=>{
    res.send("Hello World");
});

app.listen(app.get('port'),()=>{
    console.log("Starting server Nodejs");
})