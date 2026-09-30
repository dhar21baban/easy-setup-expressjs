

export const jwtConfig = {
    publicKey: getPublicKey(), // its return string or read public.pem file content from env then return it
    privateKey: getPrivateKey(), // // its return string or read private.pem file content from env then return it
    passphrase: process.env.JWT_PASSPHRASE, // read from env its string value
    algorithm: 'RS256' as const, // its algorithm name e: 
  };