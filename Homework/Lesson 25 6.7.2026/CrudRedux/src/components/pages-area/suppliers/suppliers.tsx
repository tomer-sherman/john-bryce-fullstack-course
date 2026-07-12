import { useEffect, useState } from "react";
import "./suppliers.css";
import { SupplierModel } from "../../../models/supplier-model";
import { supplierService } from "../../../services/supplier-service";
import { NavLink, useNavigate } from "react-router-dom";


export function Suppliers() {
    const [suppliers, setSuppliers] = useState<SupplierModel[]>();
    const navigate = useNavigate();

    useEffect(() => {
        supplierService.getAllSuppliers()
            .then(allSuppliers => setSuppliers(allSuppliers))
            .catch(err => alert(err.message))
    }
    )

    async function deleteMe(id: number): Promise<void> {
        const sure = confirm("Are you sure?");
        if(!sure) return;

       try{
        supplierService.deleteSupplier(id);
        navigate("/suppliers");
       }
       catch(err: any){
        alert(err.message)
       }

    }





    return (
        <div className="Suppliers">

            <table>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Country</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Image</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {suppliers?.map(s =>
                        <tr key={s.id}>
                            <td>{s.company}</td>
                            <td>{s.city}</td>
                            <td>{s.address}</td>
                            <td>{s.phone}</td>
                            <td><img src={s.imageUrl} /></td>
                            <td><NavLink to={`/supplier/${s.id}`}>UPDATE</NavLink></td>
                            <td><p onClick={() => deleteMe(s.id)}>DELETE</p></td>
                        </tr>)}

                </tbody>



            </table>

        </div>
    );
}
