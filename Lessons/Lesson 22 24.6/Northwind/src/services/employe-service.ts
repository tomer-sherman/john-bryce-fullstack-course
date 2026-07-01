import type { EmployeModel } from "../models/employe-model";



class EmployeService {
    
    public async getAllEmployees(): Promise<EmployeModel[]>{
        const response = await fetch("http://localhost:3030/api/employees");
        const employees = response.json();
        return employees;
    }


}

export const employeService = new EmployeService();
