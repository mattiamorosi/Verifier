const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;
const { verifyVC } = require('./verifyVC');

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost", "http://localhost:3000", "http://localhost:3001"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "token",
      "Authorization",
    ],
  })
);


app.post("/verifyVC", async function(req,res) {
    console.log("POST /verifyVC received");
    const {vc} = req.body.data;
    const vr = await verifyVC(vc);
    console.log("Verification result: "+JSON.stringify(vr));
    res.json(vr);
  })

app.get("/", function(req, res) {
    console.log("GET received")
})

app.listen(port, () => {
  console.log(`Verifier started on port : ${port}`);
});
