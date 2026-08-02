import { UserModel } from "../models/user-model";
import jwt, { SignOptions } from "jsonwebtoken";
import { appConfig } from "./app-config";
import fa from "zod/v4/locales/fa.js";
import { Role, StatusCode } from "../models/enum";
import { Credentials } from "../models/credantials";
import { dal } from "./dal";
import { ClientError } from "../models/client-error";

class Cyber {

    public generateToken(user: UserModel): string {

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