const { verifyCredential } = require("@tanglelabs/identity-manager");
const {Credential} = require("@iota/identity-wasm/node")

const verifyVC = async (vc) => {
    return await verifyCredential(Credential.fromJSON(vc));
    
};


module.exports = {verifyVC};