// Reducer - init

import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../models/user-model";

function initUser(_currentState: UserModel, action: PayloadAction<UserModel>): UserModel{
const userToInit = action.payload; // Take user to init
const newState = userToInit;
return newState;
}

//Reducer for log out

function logoutUser(_currentState: UserModel, _action: Action): UserModel{
    return null!;
}

//User Slice:

export const userSlice = createSlice({
    name: "user-slice",
    initialState: null! as UserModel,
    reducers: {initUser, logoutUser}
})