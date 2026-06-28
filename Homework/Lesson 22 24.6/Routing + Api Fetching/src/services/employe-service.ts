import type { EmployeeModel } from "../models/employe-model";

class EmployeService {
	
    public async getAllEmployees():Promise<EmployeeModel[]>{
        const response = await fetch("http://localhost:3030/api/employees");
        const employees = await response.json();
        return employees
    }


}

export const employeService = new EmployeService();
