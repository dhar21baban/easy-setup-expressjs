## setup jwt token in expressjs

### install npm package
```bash
npm i jsonwebtoken
```

there are organize ways

#### step 1:
`src/config.jwt.config.ts` 
- its primary purpose provides necessary information for jwt 

```ts
export const jwtConfig = {
  publicKey: getPublicKey(), // its return string or read public.pem file content from env then return it
  privateKey: getPrivateKey(), // // its return string or read private.pem file content from env then return it
  passphrase: process.env.JWT_PASSPHRASE, // read from env its string value
  algorithm: 'RS256' as const, // its algorithm name e: 
};
```
------------------
#### step2:
`src/utils/jwt.util.ts` 
- this file is create to  provides helper function for easily generate and verify jwt token

-- ues this util function in services where we generate token

```ts
// src/utils/jwt.util.ts
import { jwtConfig } from "@src/config/jwt.config";
import jwt, { SignOptions, JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";

export nameSpace JwtUtil{
  export interface CustomJwtPayload{
    userId?:number;
  }

  const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";

  /**
   * Generates JWT safely using Private Key + Passphrase
   */
  export const generateToken = (payload: CustomJwtPayload): string => {
    try {
      const options: SignOptions = {
        expiresIn: JWT_EXPIRES_IN as any,
        algorithm: jwtConfig.algorithm,
      };

      const secretOrKey = "secret key from env";

      return jwt.sign(payload, secretOrKey, options);
    } catch (error) {
      console.error("[JwtUtil.generateToken Error]:", error);
      throw new Error("Failed to sign JWT token. Please check key formatting or passphrase.");
    }
  };
}


 /**
   * Verifies token safely using Public Key
   * Throws explicit errors so middleware can catch them cleanly
   */
  export const verifyToken = (token: string): CustomJwtPayload => {
    try {
      return jwt.verify(token, jwtConfig.publicKey, {
        algorithms: [jwtConfig.algorithm],
      }) as CustomJwtPayload;
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        throw new Error("TokenExpiredError: The provided token has expired.");
      }
      if (error instanceof JsonWebTokenError) {
        throw new Error("InvalidTokenError: The provided token is invalid or corrupted.");
      }
      
      console.error("[JwtUtil.verifyToken Unexpected Error]:", error);
      throw new Error("AuthenticationError: Failed to verify token.");
    }
  };

```
------------------










## Other info

### jwt migration
- [Migration from V7 to V8](https://github.com/auth0/node-jsonwebtoken/wiki/Migration-Notes:-v7-to-v8)

- [Migration from V8 to V9](https://github.com/auth0/node-jsonwebtoken/wiki/Migration-Notes:-v8-to-v9)
