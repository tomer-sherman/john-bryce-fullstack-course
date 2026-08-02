import { OkPacketParams } from "mysql2";
import { UserModel } from "../models/user-model";
import { dal } from "../util/dal";
import { cyber } from "../util/cyber";
import { Credentials } from "../models/credantials";
import { ClientError } from "../models/client-error";
import { StatusCode } from "../models/enum";


class UserService {

    public async addUser(user: UserModel): Promise<string> {

        // Validation
        user.validate();

        //SQL:

        const sql = "insert into users(firstName, lastName, email, password, roleId) values(?,?,?,?,?)";
        const values = [user.firstName, user.lastName, user.email, user.password, user.roleId];

        // Checks if user in Db exist throw new Client Error on the browser

        if (await this.isEmailExists(user.email)) {
            throw new ClientError(StatusCode.Conflict, "The email you are trying to register with already exist!")
        }

      

        //Execute:
        const info = await dal.execute(sql, values) as OkPacketParams;
        user.id = info.insertId!;

        // Generate token:
        const token = cyber.generateToken(user);

        // Return the token
        return token;
    }

    // Login:
    public async login(credentials: Credentials): Promise<string> {

        //Validate:
        credentials.validate()

        const sql = "select * from users where email = ? and password = ?";
        const values = [credentials.email, credentials.password];

        const userArr = await dal.execute(sql, values) as UserModel[];
        const user = userArr[0];

        //If no such user:
        if (!user) { throw new ClientError(StatusCode.Unauthorized, "Incorrect email or password") };


        //Generate token
        const token = cyber.generateToken(user);
        return token;
    }

    public async isEmailExists(email: string): Promise<boolean> {

        const sql = "select id from users where email = ?"
        const values = [email];

        const userArr = await dal.execute(sql, values) as UserModel[];
        const user = userArr[0];

        return !!user;


    }

    

}

export const userService = new UserService();