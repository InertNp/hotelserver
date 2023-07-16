const express = require('express')
const app = express();
const PORT = process.env.PORT || 9000;
const authRoute = require("./routes/auth")

app.get("/", (req, res) => {
    res.send(true);
  });
app.use(express.json)
app.use("/auth",authRoute );

app.listen(PORT,()=>{
    console.log("App Running on port:"+PORT)
})