const express = require('express');
const app = express();

//settings port
app.set('port',process.env.POST||3000);

//Middlewares
app.use(express.json());

app.use('/', (req,res)=>{
    res.send("Hello WOrld");
});

app.listen(app.get('port'),()=>{
    console.log("Starting server Nodejs");
})