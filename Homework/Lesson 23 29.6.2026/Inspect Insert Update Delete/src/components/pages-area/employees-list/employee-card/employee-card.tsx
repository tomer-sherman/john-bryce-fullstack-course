import { useNavigate } from "react-router-dom";
import type { EmployeeModel } from "../../../../models/employee-model";
import "./employee-card.css";

export type EmployeeProps ={
    employee: EmployeeModel;
}

export function EmployeeCard(prop: EmployeeProps) {

    const navigate = useNavigate();

    function showDetails():void{
        navigate("/employees/details/"+prop.employee.id);
    }




    return (
        <div className="EmployeeCard" onClick={showDetails}>

			<p>Full name: {prop.employee.firstName} {prop.employee.lastName}</p>
            <p>Birthday: {prop.employee.birthDate}</p>
            <p>Country: {prop.employee.country}</p>
            <p>City: {prop.employee.city}</p>
            <img src={prop.employee.imageUrl}></img>

        </div>
    );
}
