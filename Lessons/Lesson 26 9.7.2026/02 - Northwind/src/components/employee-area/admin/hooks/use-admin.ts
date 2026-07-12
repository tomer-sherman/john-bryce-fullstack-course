import { useNavigate } from "react-router-dom";
import { UserModel } from "../../../../models/user-model";
import { AppState } from "../../../../redux/app-state";
import { useEffect } from "react";
import { Role } from "../../../../utils/enums";
import { notify } from "../../../../utils/notify";
import { useSelector } from "react-redux";

export function useAdmin(): void {
    const user = useSelector<AppState, UserModel>(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.role !== Role.Admin) {
            notify.error("You are not authorized!");
            navigate("/signin");
        }
    }, []);
}