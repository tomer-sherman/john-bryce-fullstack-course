import axios from "axios";
import type { EmployeeModel } from "../models/employee-model";
import { appConfic } from "../utils/app-config";

class EmployeeService {

    public async getAllEmployees(): Promise<EmployeeModel[]> {
        const response = await fetch(appConfic.eployeesListUrl);
        const employees = await response.json();
        return employees;
    }

    public async getOneEmployee(id: number): Promise<void> {
        const response = await fetch(appConfic.eployeesListUrl + "/" + id);
        const employee = response.json();
        return employee
    }

    public async addEmployee(employee: EmployeeModel): Promise<void> {

        const employeeFormData = new FormData();
        employeeFormData.append("firstName", employee.firstName);
        employeeFormData.append("lastName", employee.lastName);
        employeeFormData.append("birthDate", employee.birthDate);
        employeeFormData.append("country", employee.country);
        employeeFormData.append("city", employee.city);
        employeeFormData.append("image", employee.image);

        const response = await axios.post<EmployeeModel>(appConfic.eployeesListUrl, employeeFormData);
        const dbEmployee = response.data;
        console.log(dbEmployee);

    }

    public async updateEmployee(employee: EmployeeModel): Promise<void> {

        const employeeFormData = new FormData();
        employeeFormData.append("firstName", employee.firstName);
        employeeFormData.append("lastName", employee.lastName);
        employeeFormData.append("birthDate", employee.birthDate);
        employeeFormData.append("country", employee.country);
        employeeFormData.append("city", employee.city);
        employeeFormData.append("image", employee.image);

        const response = await axios.put<EmployeeModel>(appConfic.eployeesListUrl+"/"+employee.id, employeeFormData); // Dont forget too send the data form!!!!

        const dbEmployee = response.data;
        console.log(dbEmployee);


    }


    public async deleteEmployee(id: number): Promise<void>{
        await axios.delete(appConfic.eployeesListUrl +"/" + id)
    }




}

export const employeeService = new EmployeeService();
