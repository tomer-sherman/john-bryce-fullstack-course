import { useEffect, useState } from "react";
import "./employee-list.css";
import { EmployeeModel } from "../../../models/employee-model";
import { employeeService } from "../../../services/employee-service";
import { EmployeeCard } from "../employee-card/employee-card";

export function EmployeeList() {

    const [employees, setEmployees] = useState<EmployeeModel[]>([]);

    useEffect(()=>{
        employeeService.getAllEmployees()
            .then(employees => setEmployees(employees))
            .catch(err => alert(err.message));
    }, []);

    return (
        <div className="EmployeeList">

			{employees.map(emp=> <EmployeeCard key={emp.id} employee={emp}/>)}

        </div>
    );
}



// Steps for getting, api lists from a server.
// 1. You create A sevices Folder, whithin it you create a service.
// Using some kind of cli, i have forgot.
//2. In this servies.ts file, you code a normal Ajax fetching,
// A normal asnych function that returns a Promise<> and it has too be a singleTon, Thus you need
// Too export the class you have created in the same file and give it a const name.
// 3. Create a type, that contains all the nescery Details, of what the List returns, if its an employe for example,
// The type has id, lastname , firstname, etc.....
// Use this model in the type in which the Service class that you have created, in the return function.
//4. The last step IS using the Specific Model you have created in the useState, in the main component you will display all those objects.
// You use it in the type of the useState section. the Local State manegment section.