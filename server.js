
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req,res)=>res.send('OINIO Public Server Running'));

app.post('/api/run',(req,res)=>{
  res.json({ status:'ok', message:'Guidance cycle complete (demo).' });
});

app.listen(process.env.PORT || 3000);
