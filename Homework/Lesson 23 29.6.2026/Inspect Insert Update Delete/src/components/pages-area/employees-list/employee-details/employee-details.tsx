import { useEffect, useState } from "react";
import "./employee-details.css";
import type { EmployeeModel } from "../../../../models/employee-model";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { employeeService } from "../../../../services/employee-service";
import { EmployeeCard } from "../employee-card/employee-card";

export function EmployeeDetails() {

    const [employee, setEmployee] = useState<EmployeeModel>();
    const params = useParams();
    const id = Number(params.prodId);
    const navigate = useNavigate();

    useEffect(() => {

        employeeService.getOneEmployee(id).
            then(dbEmp => setEmployee(dbEmp!))
            .catch(err => alert(err.message))

    }, [])



    async function deleteMe(){
        try{
           const sure = confirm("ARE YOU SURE!!!?");
           if(!sure) return;
           
            await employeeService.deleteEmployee(id);
            navigate("/employees");

        }
        catch(err:any){
            alert(err.message)
        }
    }



    return (
        <div className="EmployeeDetails">

            {employee ? (
                <div className="details-card-wrapper">
                    <EmployeeCard employee={employee} />
                    <NavLink to="/employees">Back</NavLink>
                    <NavLink to={"/employees/edit/" + employee.id }>Edit</NavLink>
                    <NavLink to = "#" onClick={deleteMe}>Delete 🚮</NavLink>


                </div>
                
            


            ) :
                (<p>Loading employee data.....</p>)}

        </div>
    );
}


