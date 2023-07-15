const express = require("express");
require("dotenv").config();

/**
 * 
 * Created a simple Node.js Application
 * 
 */

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("app is running....");
});

app.post("/greetings", (req, res) => {
  const name = req.body.name;
  res.send(`Hi ${name}, How are you?`);
});

app.listen(PORT, () => {
  console.log(`App is running in http://localhost:${PORT}`);
});
