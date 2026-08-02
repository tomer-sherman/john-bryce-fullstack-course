import z from "zod";
import { ClientError } from "./client-error";
import { StatusCode } from "./enum";

// User Schema FROM ZOD package - matching the users table columns:
const userSchema = z.object({
    id: z.number().int().positive().optional(),
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.email().max(100),
    password: z.string().min(4).max(256),
    roleId: z.number().int().positive(),
});

// User Interface, a set of rules that classes have too follow a Contract if they shake hands with it.
type IUserModel = z.infer<typeof userSchema>;


// User Model
export class UserModel implements IUserModel {

    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public roleId: number;

    public constructor(user: UserModel) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = user.password;
        this.roleId = user.roleId
    }

    public validate(): void {
        const result = userSchema.safeParse(this);

        if (!result.success) {
            const message = result.error.issues[0].path + ": " + result.error.issues[0].message;
            throw new ClientError(StatusCode.UnprocessableContent, message);
        };
    }


}