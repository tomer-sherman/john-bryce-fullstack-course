import axios from "axios";
import { UserModel } from "../models/user-model";
import { appConfig } from "../utils/app-config";
import { jwtDecode } from "jwt-decode";
import { CredentialsModel } from "../models/credentials-model";
import { userSlice } from "../redux/user-slice";
import { store } from "../redux/store";

class UserService {

// Since this user Service is exported, as a singleton, Then whenever you enter the page or refresh it this class is constructed.
    public constructor() {
        // get token from local storage:
        const token = localStorage.getItem("token");

        //if we have token- save user in global state:
        if (token) {

            // extract user from the token
            const dbUser = jwtDecode<{ user: UserModel }>(token).user;

            // store user in the global state. 
            const action = userSlice.actions.initUser(dbUser);
            store.dispatch(action);
        }


    }


    public async register(user: UserModel): Promise<void> {


        // send user too backend.
        const response = await axios.post<string>(appConfig.registerUrl, user);

        //Get JWT token;
        const token = response.data;

        //Extract data;
        const dbUser = jwtDecode<{ user: UserModel }>(token).user;

        // Send user too global state:

        const action = userSlice.actions.initUser(dbUser);
        store.dispatch(action);





    }

    public async login(credentials: CredentialsModel): Promise<void> {


        // send user too backend.
        const response = await axios.post<string>(appConfig.loginUrl, credentials);

        //Get JWT token;
        const token = response.data;

        //Extract data;
        const dbUser = jwtDecode<{ user: UserModel }>(token).user;

        // Send user too global state:

        const action = userSlice.actions.initUser(dbUser);
        store.dispatch(action);

        //Save token in local storage.
        localStorage.setItem("token", token);


    }


    public logout(): void {
        const action = userSlice.actions.logoutUser();
        store.dispatch(action);

        localStorage.removeItem("token");
    }


}

export const userService = new UserService();
