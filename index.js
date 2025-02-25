require('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;
const mongoDB = require("./db");


app.use(cors({
  origin: "*", 
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept"
}));

mongoDB();

app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));

app.get('/', (req, res) => {
  res.send('Server is Running')
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
});
