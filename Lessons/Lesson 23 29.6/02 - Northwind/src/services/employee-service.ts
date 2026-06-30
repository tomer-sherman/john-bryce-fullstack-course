import { EmployeeModel } from "../models/employee-model";
import { appConfig } from "../utils/app-config";

class EmployeeService {

    // Fetch all employees:
	public async getAllEmployees(): Promise<EmployeeModel[]> {
        const response = await fetch(appConfig.employeesUrl);
        const employees = await response.json();
        return employees;
    }

}

export const employeeService = new EmployeeService();
