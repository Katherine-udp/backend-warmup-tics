const express = require('express');
const calculatorRouter = require('./routers/calculator');

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/',(req, res)=>{
    res.send("I am response");
});

app.use('/api', calculatorRouter);


app.listen(3000, () => {
    console.log('App listening at port: '+3000)
  })
