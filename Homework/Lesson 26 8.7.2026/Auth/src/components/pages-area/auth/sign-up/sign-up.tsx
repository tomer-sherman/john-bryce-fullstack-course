import { useNavigate } from "react-router-dom";
import "./sign-up.css";
import { UserModel } from "../../../../models/user-model";
import { useForm } from "react-hook-form";
import { userService } from "../../../../services/user-service";

export function SignUp() {

    const { register, handleSubmit } = useForm<UserModel>();
    const navigate = useNavigate();

    function back() {
        navigate("/suppliers")
    }

    async function send(user: UserModel){
        try{
            
            await userService.register(user);
            navigate("/suppliers")

        }catch(err:any){
            alert(err.message);
        }
    }


    return (
        <div className="SignUp">
            <form onSubmit={handleSubmit(send)}>
                <label>First Name</label>
                <input type="text" {...register("firstName")} />

                <label>Last Name</label>
                <input type="text" {...register("lastName")} />

                <label>Email</label>
                <input type="text" {...register("email")} />

                <label>Password</label>
                <input type="password" {...register("password")} />

                <button>Send</button>
                <button type="button" onClick={back}>Back</button>
            </form>


        </div>
    );
}
