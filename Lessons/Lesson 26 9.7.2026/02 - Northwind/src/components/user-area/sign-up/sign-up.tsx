import { useForm } from "react-hook-form";
import "./sign-up.css";
import { UserModel } from "../../../models/user-model";
import { notify } from "../../../utils/notify";
import { userService } from "../../../services/user-service";
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";

export function SignUp() {

    const { register, handleSubmit } = useForm<UserModel>();
    const navigate = useNavigate();
    async function send(user: UserModel) {
        try {

            await userService.register(user);
            notify.success("Welcome!!" + user.firstName);
            navigate("/home");

        } catch (err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="SignUp">

            <Typography variant="h4" color="secondary">
                Register to Northwind
            </Typography>

            <form onSubmit={handleSubmit(send)}>

                <TextField label="First name" type="text" {...register("firstName")} fullWidth required />

                <TextField label="Last name" type="text" {...register("lastName")} fullWidth required />

                <TextField label="Email" type="email" {...register("email")} fullWidth required />

                <TextField label="password" type="password" {...register("password")} fullWidth required />
                {/* <label>First name</label>
                <input type="text" {...register("firstName")} /> */}
                <FormControlLabel label="Send me promos" control={<Checkbox />} />

                <ButtonGroup variant="contained" fullWidth>
                    
                    <Button type="submit" color="primary">Sign up</Button>
                    <Button type="reset" color="secondary">Clear</Button>

                </ButtonGroup>



               

            </form>

        </div>
    );
}
