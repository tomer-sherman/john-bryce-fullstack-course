

// Reducer - add products:

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmployeeModel } from "../models/employee-model";

//  Reducer -add product:
function addEmployee(currentState: EmployeeModel[], action: PayloadAction<EmployeeModel>): EmployeeModel[] {
    const productToAdd = action.payload; 
    const newState = [...currentState]; 
    newState.push(productToAdd); 
    return newState; 
}

// Reducer -- update:
function updateEmployee(currentState: EmployeeModel[], action: PayloadAction<EmployeeModel>): EmployeeModel[] {
    const productToUpdate = action.payload; 
    const newState = [...currentState]; 
    const index = newState.findIndex(p => p.id === productToUpdate.id); 
    if (index >= 0) {
        newState[index] = productToUpdate; 
    }

    return newState; 

}



function deleteEmployee(currentState: EmployeeModel[], action: PayloadAction<number>): EmployeeModel[] {
    const idTooDelete = action.payload; 
    const newState = [...currentState]; 
    const index = newState.findIndex(p => p.id === idTooDelete); 

    if (index >= 0) {
        newState.splice(index, 1); 
    }

    return newState;
}



function initEmployees(_currentState: EmployeeModel[], action: PayloadAction<EmployeeModel[]>): EmployeeModel[] {
    const productsToInit = action.payload; 
    const newState = productsToInit; 
    return newState; 
}

// Slice for handling products:
export const employeesSlice = createSlice({
    name: "employees-slice", 
    initialState: [] as EmployeeModel[], 
    reducers: {initEmployees, deleteEmployee, addEmployee, updateEmployee } 
});



