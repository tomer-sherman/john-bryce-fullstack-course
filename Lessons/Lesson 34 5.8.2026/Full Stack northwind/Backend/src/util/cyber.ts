import { UserModel } from "../models/user-model";
import jwt, { SignOptions } from "jsonwebtoken";
import { appConfig } from "./app-config";
import { Role } from "../models/enum";
import crypto from "crypto";


class Cyber {

    // Hash password:
    public hash(plainText: string): string {
        // Create HMAC hash based message authentication.
        const hashText = crypto.createHmac("sha512", appConfig.hashSalt).update(plainText).digest("hex");
        return hashText;
    }


    public generateToken(user: UserModel): string {

        // Remove password:
        user.password = undefined!;

        // Create payload:
        const payload = { user };

        // create options:
        const options: SignOptions = { expiresIn: "3h" };

        // Generate token:
        const token = jwt.sign(payload, appConfig.jwtSecret!, options);

        // Return token:
        return token;

    }

    // Verify token:
    public verifyToken(token: string): boolean {

        try {
            if (!token) return false;

            jwt.verify(token, appConfig.jwtSecret!);
            return true;
        }
        catch (err: any) {
            return false; // Token not legal
        }

    }

    //Verify admin:
    public verifyAdmin(token: string): boolean {

        try {
            if (!token) return false;

            jwt.verify(token, appConfig.jwtSecret!);
            const payload = jwt.decode(token) as { user: UserModel };
            const userRole = payload.user.roleId;


            if (userRole !== Role.Admin) { return false }


            return true;
        }
        catch (err: any) {
            return false; // Token not legal
        }

    }

    


}

export const cyber = new Cyber();