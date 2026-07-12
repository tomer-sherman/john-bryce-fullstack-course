import { Navigate, Route, Routes } from "react-router-dom";
import { Suppliers } from "../../pages-area/supplier-area/suppliers/suppliers";
import { AddSupplier } from "../../pages-area/supplier-area/suppliers/add-supplier/add-supplier";
import { UpdateSupplier } from "../../pages-area/supplier-area/suppliers/update-supplier/update-supplier";
import { SignIn } from "../../pages-area/auth/sign-in/sign-in";
import { SignUp } from "../../pages-area/auth/sign-up/sign-up";

export function Routing() {
    return (

        <Routes>


            <Route path="/" element={<Navigate to={"/suppliers"} />} />
            
            <Route path="/suppliers" element={<Suppliers />} />

            <Route path="/add-supplier" element={<AddSupplier />} />

            <Route path="/supplier/:prodId" element={<UpdateSupplier />} />

            <Route path="/signin" element={<SignIn/>}/>

            <Route path="/signup" element={<SignUp/>}/>

        </Routes>


    );
}
