import z from "zod";
import { ClientError } from "./client-error";
import { StatusCode } from "./enum";

// Credentials Schema FROM ZOD package:
const credentialsSchema = z.object({
    email: z.email().max(100),
    password: z.string().min(4).max(256),
});

// Credentials Interface, a set of rules that classes have too follow a Contract if they shake hands with it.
type ICredentials = z.infer<typeof credentialsSchema>;

// Credentials Model
export class Credentials implements ICredentials {

    public email: string;
    public password: string;

    public constructor(email : string, password: string) {

        this.email = email;
        this.password = password;

    }

    public validate(): void {
        const result = credentialsSchema.safeParse(this);

        if (!result.success) {
            const message = result.error.issues[0].path + ": " + result.error.issues[0].message;
            throw new ClientError(StatusCode.UnprocessableContent, message);
        };
    }

}
