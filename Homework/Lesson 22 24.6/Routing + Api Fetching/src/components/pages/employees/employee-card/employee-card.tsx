import type { EmployeeModel } from "../../../../models/employe-model";
import "./employee-card.css";

export type singleEmployee = {
    employe : EmployeeModel;
}


export function EmployeeCard(props: singleEmployee) {
    return (
        <div className="EmployeeCard">
          <span>{props.employe.lastName}</span>
          <span>{props.employe.firstName}</span>
          <span>{props.employe.city}</span>
          <img src={props.employe.imageUrl}></img>
        </div>
    );
}
