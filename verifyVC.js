const { verifyCredential, isCredentialValid, IdentityManager } = require("@tanglelabs/identity-manager");
const {Credential, Document} = require("@iota/identity-wasm/node")
const path = require("path");
const axios = require("axios");
const verifyVC = async (vc) => {
    const ddo = await axios.post(
        "http://127.0.0.1:5000/getDDO",
        {
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                alias: "http://example-ap.com",
            }
        }
    );
    if (ddo.data === "Not found") return null;
    console.log(Document.fromJSON(ddo.data));
    return await isCredentialValid(Credential.fromJSON(vc), Document.fromJSON(ddo.data));    // returns only VC
    //return await verifyCredential(Credential.fromJSON(vc));   // returns both VC and DVID
    
};


module.exports = {verifyVC};