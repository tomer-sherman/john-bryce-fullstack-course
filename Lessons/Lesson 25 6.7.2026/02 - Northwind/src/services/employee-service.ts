import axios from "axios";
import { EmployeeModel } from "../models/employee-model";
import { employeesSlice } from "../redux/employees-slice";
import { store } from "../redux/store";
import { appConfig } from "../utils/app-config";

class EmployeeService {

    // Fetch all employees:
	public async getAllEmployees(): Promise<EmployeeModel[]> {

        if(store.getState().employees.length > 0){
            return store.getState().employees;
        }

        const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl);
        const employees = response.data;

        const action = employeesSlice.actions.initEmployees(employees);
        store.dispatch(action);
       
        return employees;
        
    }

}

export const employeeService = new EmployeeService();
