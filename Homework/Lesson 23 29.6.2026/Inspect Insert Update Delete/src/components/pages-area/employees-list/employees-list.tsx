import { useEffect, useState } from "react";
import "./employees-list.css";
import type { EmployeeModel } from "../../../models/employee-model";
import { employeeService } from "../../../services/employee-service";
import { EmployeeCard } from "./employee-card/employee-card";


export function EmployeesList() {

    const [employees, setEmployees] = useState<EmployeeModel[]>([])

    useEffect(()=>{

        // SERVICE!!!
        employeeService.getAllEmployees()
        .then(emps=> setEmployees(emps))
        .catch(err=>alert(err.message))

        //THEN
        // CATH


    },[])

    return (
        <div className="EmployeesList">

            {employees.map(emp => <EmployeeCard key={emp.id} employee={emp}/>)}
			
        </div>
    );
}
