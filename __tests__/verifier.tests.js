const { verifyVC } = require("../verifyVC");

jest.setTimeout(300000)

const vc = {"@context": "https://www.w3.org/2018/credentials/v1", "credentialStatus": {"id": "did:iota:8CxxoHCL8VNmKHCcmWnb9pc3XfeaNFy6qedZjPYGpLMX#revocation-bitmap", "revocationBitmapIndex": "15", "type": "RevocationBitmap2022"}, "credentialSubject": {"id": "did:iota:CwbVHx7cZaYoHuXwTvV3AC1cWrTMJNsMBQMQNsfQvkFJ", "name": "name", "surname": "surname", "university": "university"}, "id": "http://coodos.co/", "issuanceDate": "2022-11-02T11:04:31Z", "issuer": "did:iota:8CxxoHCL8VNmKHCcmWnb9pc3XfeaNFy6qedZjPYGpLMX", "proof": {"signatureValue": "QYDbdFK18wtMRv3UhTdMw3QyMkXfhpJkP24b41whZyjH8XXd6QANq8pJCvtqyK953Hc4qgzRj2fa5ZjJnNWSzif", "type": "JcsEd25519Signature2020", "verificationMethod": "did:iota:8CxxoHCL8VNmKHCcmWnb9pc3XfeaNFy6qedZjPYGpLMX#signing-method"}, "type": ["VerifiableCredential", "UniversityCredential"]};
test ("Should return true", async()=> {
    expect(
        await verifyVC(vc)
    ).toBe(true);
})

const modified_vc = {"@context": "https://www.w3.org/2018/credentials/v1", "credentialStatus": {"id": "did:iota:8CxxoHCL8VNmKHCcmWnb9pc3XfeaNFy6qedZjPYGpLMX#revocation-bitmap", "revocationBitmapIndex": "15", "type": "RevocationBitmap2022"}, "credentialSubject": {"id": "did:iota:CwbVHx7cZaYoHuXwTvV3AC1cWrTMJNsMBQMQNsfQvkFJ", "name": "name", "surname": "surname", "university": "university"}, "id": "http://coodos.co/", "issuanceDate": "2022-11-02T11:04:31Z", "issuer": "did:iota:8CxxoHCL8VNmKHCcmWnb9pc3XfeaNFy6qedZjPYGpLMX", "proof": {"signatureValue": "QYDbdFK18wtMRv3UhTdMw3QyMlXfhpJkP24b41whZyjH8XXd6QANq8pJCvtqyK953Hc4qgzRj2fa5ZjJnNWSzif", "type": "JcsEd25519Signature2020", "verificationMethod": "did:iota:8CxxoHCL8VNmKHCcmWnb9pc3XfeaNFy6qedZjPYGpLMX#signing-method"}, "type": ["VerifiableCredential", "UniversityCredential"]};
test ("Should return false", async()=> {
    expect(
        await verifyVC(modified_vc)
    ).toBe(false);
})
