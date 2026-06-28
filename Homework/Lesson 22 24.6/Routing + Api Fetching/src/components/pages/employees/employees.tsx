import "./employees.css";
import type { EmployeeModel } from "../../../models/employe-model";
import { useEffect, useState } from "react";
import { employeService } from "../../../services/employe-service";
import { EmployeeCard } from "./employee-card/employee-card";

export function Employees() {

    const [employees, setEmployees] = useState<EmployeeModel[]>([]);

    useEffect(() => {

        employeService.getAllEmployees()
            .then(employees => setEmployees(employees))
            .catch(err => alert(err.message));

    }, []);


    return (
        <div className="Employees">

            {employees.map(emp=> <EmployeeCard key={emp.id} employe={emp}/>)}

        </div>
    );
}
