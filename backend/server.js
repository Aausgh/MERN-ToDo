const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todo');

// express app
const app = express();


//midddleware
app.use(express.json());

app.use((req, res, next) => {
      console.log(req.path, req.method)
      next()
})

//routes
app.use('/api/todo', todoRoutes);

//Conect to db
mongoose.connect(process.env.MONGO_URI)
      .then(() => {
            // listen to port
            app.listen(process.env.PORT, () => {
                  console.log('connected to db & listening for requests on port', process.env.PORT)
            })
      })
      .catch((err) => {
            console.log(err)
      }) 