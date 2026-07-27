import { OkPacketParams } from "mysql2";
import { UserModel } from "../models/user-model";
import { dal } from "../util/dal";


class UserService {

    public async addUser(user: UserModel): Promise<UserModel> {

        // Validation
        //...

        //SQL:

        const sql = "insert into users(firstName, lastName, email, password, roleId) values(?,?,?,?,?)";
        const values = [user.firstName, user.lastName, user.email, user.password, user.roleId];

        //Execute:
        const info = await dal.execute(sql, values) as OkPacketParams;

        user.id = info.insertId!;

        return user;
    }

}

export const userService = new UserService();