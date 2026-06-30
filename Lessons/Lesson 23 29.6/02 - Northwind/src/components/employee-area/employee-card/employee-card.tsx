import "./employee-card.css";
import { EmployeeModel } from "../../../models/employee-model";

export type EmployeeProp = {
    employee: EmployeeModel;
}

export function EmployeeCard(props: EmployeeProp) {
    return (
        <div className="EmployeeCard">

            <p>Full name: {props.employee.firstName} {props.employee.lastName}</p>
            <p> Birth day:{props.employee.birthDate}, City: {props.employee.city}</p>
            <img src={props.employee.imageUrl}></img>
        </div>
    );
}
