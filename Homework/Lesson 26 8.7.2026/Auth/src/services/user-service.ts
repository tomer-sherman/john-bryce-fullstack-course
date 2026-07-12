import axios from "axios";
import { UserModel } from "../models/user-model";
import { appConfig } from "../utils/app-config";
import { jwtDecode } from "jwt-decode";
import { userSlice } from "../redux/user-slice";
import { store } from "../redux/store";
import { CredentialModel } from "../models/credential-model";

class UserService {

    public constructor(){

        const token = localStorage.getItem("token");

        //If token exist - save in global state

        if(token){
            //Extract this data from this string
            const dbUser = jwtDecode<{user: UserModel}>(token).user;
            // Store user in global state
            const action = userSlice.actions.initUser(dbUser);
            store.dispatch(action);

        }

        // IF there is no token in the global state it will not run

    }


    public async register(user: UserModel): Promise<void> {

        // Send user too backend.
        const response = await axios.post<string>(appConfig.registerUrl, user);

        // Get JWT auth string.
        const token = response.data;

        // Extract this data too a use able object
        const dbUser = jwtDecode<{ user: UserModel }>(token).user;

        // Synch with global state
        const action = userSlice.actions.initUser(dbUser);
        store.dispatch(action);

    }

    public async login(credentials: CredentialModel): Promise<void>{

        // Send user too backend
        const response = await axios.post<string>(appConfig.loginUrl, credentials);

        //Get JWT TOKEN;
        const token = response.data;

        //Extract data:
        const dbUser = jwtDecode<{ user: UserModel }>(token).user;

        // Send user Too global state:

        const action = userSlice.actions.initUser(dbUser);
        store.dispatch(action);

        // Save token in local storage.
        localStorage.setItem("token", token);
    }

    public logout():void{
        const action = userSlice.actions.logoutUser();
        store.dispatch(action);

        localStorage.removeItem("token");
    }


}

export const userService = new UserService();
