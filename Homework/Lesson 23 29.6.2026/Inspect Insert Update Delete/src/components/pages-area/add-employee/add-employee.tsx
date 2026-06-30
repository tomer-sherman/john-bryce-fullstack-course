
import { useNavigate } from "react-router-dom";
import "./add-employee.css";
import { useForm } from "react-hook-form";
import type { EmployeeModel } from "../../../models/employee-model";
import { employeeService } from "../../../services/employee-service";


export function AddEmployee() {
    const { register, handleSubmit } = useForm<EmployeeModel>();
    const navigate = useNavigate();

    async function send(employee: EmployeeModel) {
        try {

            // This tricks make the files actually get into the server.
            // Because of a web minor problem.
            employee.image = (employee.image as unknown as FileList)[0];

            await employeeService.addEmployee(employee);
            navigate("/employees")
        } catch (err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="AddEmployee">

            <form onSubmit={handleSubmit(send)}>

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
                <input type="file" accept="image/*" {...register("image")} required />

                <button>Add</button>



            </form>


        </div>
    );
}
