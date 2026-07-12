import { useNavigate } from "react-router-dom";
import { supplierService } from "../../../../../services/supplier-service";
import "./add-supplier.css";
import { SupplierModel } from "../../../../../models/supplier-model";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { AppState } from "../../../../../redux/app-state";
import { UserModel } from "../../../../../models/user-model";
import { useEffect } from "react";
import { Role } from "../../../../../utils/enum";


export function AddSupplier() {

    const { register, handleSubmit } = useForm<SupplierModel>();
    const navigate = useNavigate();
    
    // Check if use is admin If NO THEN KICK HIM OFF:

    const userRole = useSelector<AppState, UserModel>(user=> user.user);

    useEffect(()=>{
        if(userRole.role !== Role.Admin){
            alert("YOU ARE NOT AN ADMIN FUCK OFF!");
            navigate("/suppliers");
        }
    })




    async function send(supplier: SupplierModel): Promise<void> {


        try {
            // Extract the path of the picture
            supplier.image = (supplier.image as unknown as FileList)[0];

            // Add supplier
            await supplierService.addSupplier(supplier);

            //Navigate too home.
            navigate("/suppliers")
        }
        catch (err: any) {
            alert(err.message);
        }

    }

    function back() {
        navigate("/suppliers")
    }



    return (
        <div className="AddSupplier">

            <form onSubmit={handleSubmit(send)}>

                <label>Company</label>
                <input type="text" {...register("company")} required />

                <label>Country</label>
                <input type="text" {...register("country")} required />

                <label>City</label>
                <input type="text" {...register("city")} required />

                <label>Address</label>
                <input type="text" {...register("address")} required />

                <label>Phone</label>
                <input type="text" {...register("phone")} required />

                <label>Image</label>
                <input type="file" accept="image/*" {...register("image")} required />

                <button>Send</button>
                <button type="button" onClick={back}>Back</button>

            </form>

        </div>
    );
}
