
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./employee-edit.css"
import { useEffect } from "react";
import type { EmployeeModel } from "../../../../models/employee-model";
import { employeeService } from "../../../../services/employee-service";


export function EmployeeEdit() {
    const { register, handleSubmit, reset } = useForm<EmployeeModel>();
    const navigate = useNavigate();
    const params = useParams();
    const id = Number(params.prodId)

    useEffect(() => {
        employeeService.getOneEmployee(id)
            .then(dbEmployee => {
                if (dbEmployee!) { reset(dbEmployee) } 
            })
            .catch(err => alert(err.message))
    }, [])



    async function update(employee: EmployeeModel) {
        try {

            employee.id = id;
            if (employee.image) {
                employee.image = (employee.image as unknown as FileList)[0];
            }

            await employeeService.updateEmployee(employee);
            navigate("/employees");

        } catch (err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="EmployeeEdit">

            <form onSubmit={handleSubmit(update)}>

                <label>First Name:</label>
                <input type="text" {...register("firstName")} minLength={2} maxLength={50} required />

                <label>Last Name:</label>
                <input type="text" {...register("lastName")} minLength={2} maxLength={50} required />

                <label>Birthday:</label>
                <input type="date" {...register("birthDate")} required />

                <label>Country:</label>
                <input type="text" {...register("country")} minLength={2} maxLength={50} required />

                <label>City:</label>
                <input type="text" {...register("city")} minLength={2} maxLength={50} required />

                <label>Image:</label>
                <input type="file" accept="image/*" {...register("image")} />

                <button>Add</button>



            </form>


        </div>
    );
}
