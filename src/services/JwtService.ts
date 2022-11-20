import { JWT_SECRET } from "../../config";
import jwt, { JwtPayload } from "jsonwebtoken";

class JwtService {
    static sign(payload: JwtPayload, expiry: string = '1m', secret: string = JWT_SECRET!): string {
        return jwt.sign(payload, secret, { expiresIn: expiry })
    }

    static verify(token: string, secret: jwt.Secret = JWT_SECRET!): JwtPayload | string {
        return jwt.verify(token, secret);
    }
}
export default JwtService;