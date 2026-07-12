import { Role } from "../utils/enum";

export type UserModel = {
    
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: Role;
}
