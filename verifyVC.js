const { verifyCredential, isCredentialValid } = require("@tanglelabs/identity-manager");
const {Credential} = require("@iota/identity-wasm/node")

const verifyVC = async (vc) => {
    return await isCredentialValid(Credential.fromJSON(vc));    // returns only VC
    //return await verifyCredential(Credential.fromJSON(vc));   // returns both VC and DVID
    
};


module.exports = {verifyVC};