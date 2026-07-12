import { useNavigate } from "react-router-dom";
import { UserModel } from "../../../../models/user-model";
import { AppState } from "../../../../redux/app-state";
import { useEffect } from "react";
import { Role } from "../../../../utils/enums";
import { useSelector } from "react-redux";

export function useIsUser(): void {
    const user = useSelector<AppState, UserModel>(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.role !== Role.User) {
            navigate("/signin");
        }
    }, []);
}