import { Navigate, Route, Routes } from "react-router-dom";
import { Suppliers } from "../../pages-area/suppliers/suppliers";
import { AddSupplier } from "../../pages-area/add-supplier/add-supplier";
import { UpdateSupplier } from "../../pages-area/update-supplier/update-supplier";

export function Routing() {
    return (

        <Routes>


            <Route path="/" element={<Navigate to={"/suppliers"} />} />
            
            <Route path="/suppliers" element={<Suppliers />} />

            <Route path="/add-supplier" element={<AddSupplier />} />

            <Route path="/supplier/:prodId" element={<UpdateSupplier />} />

        </Routes>


    );
}
