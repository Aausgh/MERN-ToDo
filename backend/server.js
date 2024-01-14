require('dotenv').config();

const express = require('express');
const taskRoutes = require('./routes/tasks');

// express app
const app = express();


//midddleware
app.use(express.json());

app.use((req, res, next) => { 
      console.log(req.path, req.method)
      next()
})

//routes
app.use('/api/tasks', taskRoutes);



// listen for requests
app.listen(process.env.PORT, () => {
      console.log('listening on port', process.env.PORT )
})

process.env