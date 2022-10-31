const express = require('express');
const cors = require('cors');
const app = express();
const { verifyVC } = require('./verifyVC');
const https = require('https')
const fs = require('fs')

var privateKey  = fs.readFileSync('./HTTPS/verifier.key', 'utf8');
var certificate = fs.readFileSync('./HTTPS/verifier.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

app.use(express.json());
app.use(
  cors({
    origin: ["https://localhost", "https://localhost:3000", "https://localhost:3001"],
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
    if (vc === null) res.json("It is not possible to retrieve the DID Document of the issuer");
    else if (JSON.stringify(vr)==="false") res.json("The VC has been revoked!");
    else res.json("The VC is valid!");
  })

app.get("/", function(req, res) {
    console.log("GET received")
})

const port = 8444;
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(port,()=>{
  console.log(`Verifier is listening at port ${port}`)
})

