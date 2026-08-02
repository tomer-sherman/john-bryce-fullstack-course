import z from "zod";
import { Role, StatusCode } from "./enum";

// Uses the Zod
const userSchema = z.object({
    id: z.number().int().positive().optional(), // PK, AI - the DB creates it
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.email().max(100), // UQ - the uniqueness itself is checked by the DB
    password: z.string().min(4).max(256),
    roleId: z.enum(Role).optional() // Has a default value of 1 in the DB
})


type IUserModel = z.infer<typeof userSchema>;

export class UserModel implements IUserModel {

    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public roleId: Role;

    public constructor(user: UserModel) {

        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = user.password;
        this.roleId = user.roleId;

    }

    public validate(): void {
        const result = userSchema.safeParse(this);

        if (!result.success) {
            const message = result.error.issues[0].path + ": " + result.error.issues[0].message;
            throw new Error(StatusCode.UnprocessableContent + " | " + message);
        }


    }


}
