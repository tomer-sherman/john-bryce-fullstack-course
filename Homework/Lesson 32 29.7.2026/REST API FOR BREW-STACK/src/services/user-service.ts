import { OkPacketParams } from "mysql2";
import { UserModel } from "../models/user-model";
import { dal } from "../util/dal";
import { cyber } from "../util/cyber";
import { CredentialsModel } from "../models/credentials-model";
import { ClientError } from "../models/client-error";
import { StatusCode } from "../models/enum";
import da from "zod/v4/locales/da.js";

class UserService {

    public async register(user: UserModel): Promise<string> {

        // Validated the data that the user added
        user.validate();

        // Sql insert
        const sql = "insert into users(firstName,lastName ,email, password, roleId) values(?,?,?,?)";
        const values = [user.firstName, user.lastName, user.email, user.password, user.roleId];

        if (await this.isEmailExists(user.email)) {
            throw new ClientError(StatusCode.Conflict, "The email you are trying too register with already exist in the system");
        }

        const info = await dal.execute(sql, values) as OkPacketParams;
        user.id = info.insertId!;

        // Generate token:
        const token = cyber.generateToken(user);


        return token
    }

    public async login(credentials: CredentialsModel): Promise<string> {

        credentials.validate();

        //sql
        const sql = "select * from users where email = ? and password = ?";
        const values = [credentials.email, credentials.password];

        const userArr = await dal.execute(sql, values) as UserModel[];
        const user = userArr[0];

        if (!user) { throw new ClientError(StatusCode.Unauthorized, "Incorrect email or password!") };

        // Generate token:
        const token = cyber.generateToken(user);
        return token;


    }

    public async isEmailExists(email: string): Promise<boolean> {

        const sql = "select id from users where email = ?";
        const values = [email];

        const userArr = await dal.execute(sql, values) as UserModel[];
        const user = userArr[0];

        return !!user;
    }


}

export const userService = new UserService();