import { useForm } from "react-hook-form";
import "./sign-in.css";
import { useNavigate } from "react-router-dom";
import { CredentialModel } from "../../../../models/credential-model";
import { userService } from "../../../../services/user-service";

export function SignIn() {

    const { register, handleSubmit } = useForm<CredentialModel>();
    const navigate = useNavigate();


    async function send(credentials: CredentialModel) {

        try {
            await userService.login(credentials);
            navigate("/suppliers");
        } catch (err: any) {
            alert(err.message)
        }


    }

    return (
        <div className="SignIn">

            <form onSubmit={handleSubmit(send)}>

                <label>Email</label>
                <input type="email" {...register("email")} required />

                <label>Password</label>
                <input type="password" {...register("password")} />

                <button>Sign In</button>
                <button type="button" onClick={() => navigate("/suppliers")}>Back</button>


            </form>


        </div>
    );
}
