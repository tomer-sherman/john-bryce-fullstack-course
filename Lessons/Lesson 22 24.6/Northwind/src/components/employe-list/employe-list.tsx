import { useEffect, useState } from "react";
import type { EmployeModel } from "../../models/employe-model";
import "./employe-list.css";
import { employeService } from "../../services/employe-service";

export function EmployeList() {

    const [employes, setEmployes] = useState<EmployeModel[]>([])

    useEffect(()=>{
        employeService.getAllEmployees().
        then(allEmployes => setEmployes(allEmployes)).
        catch(err=>alert(err.message));
        
    },[]);


    return (
        <div className="EmployeList">

            {employes.map(e => <div key={e.id}>

                <span>{e.firstName} {e.lastName}</span>

                <img src={e.imageUrl}></img>


            </div>)}

        </div>
    );
}
