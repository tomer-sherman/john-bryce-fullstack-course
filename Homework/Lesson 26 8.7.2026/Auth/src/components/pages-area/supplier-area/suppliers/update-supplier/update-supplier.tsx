import { useForm } from "react-hook-form";
import { SupplierModel } from "../../../../../models/supplier-model";
import "./update-supplier.css";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supplierService } from "../../../../../services/supplier-service";

export function UpdateSupplier() {

    const { register, handleSubmit, setValues } = useForm<SupplierModel>();
    const navigate = useNavigate();
    const params = useParams();
    const id = Number(params.prodId);

    useEffect(() => {
        supplierService.getOneSupplier(id)
            .then(dbSupplier => setValues(dbSupplier))
            .catch(err => alert(err.message));
    })

    async function send(supplier: SupplierModel): Promise<void> {

        // fetch the id from the params
        supplier.id = id;
        // Extract the path of the picture
        if (supplier.image) {
            supplier.image = (supplier.image as unknown as FileList[0])
        }

        // Update the supplier
        await supplierService.updateSupplier(supplier);

        //Navigate too home.
        navigate("/suppliers")

    }

    function back() {
        navigate("/suppliers")
    }


    return (
        <div className="UpdateSupplier">

            <form onSubmit={handleSubmit(send)}>

                <label>Company</label>
                <input type="text" {...register("company")} required/>

                <label>Country</label>
                <input type="text" {...register("country")} required/>

                <label>City</label>
                <input type="text" {...register("city")} required/>

                <label>Address</label>
                <input type="text" {...register("address")} required/>

                <label>Phone</label>
                <input type="text" {...register("phone")} required/>

                <label>Image</label>
                <input type="file" accept="image/*" {...register("image")} />

                <button>Send</button>
                <button onClick={back}>Back</button>

            </form>

        </div>
    );
}
