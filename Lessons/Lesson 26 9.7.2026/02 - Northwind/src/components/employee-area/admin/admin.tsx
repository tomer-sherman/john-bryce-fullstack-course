
import "./admin.css";
import { useAdmin } from "./hooks/use-admin";


export function Admin() {
// All this lines of code need too be reapeted in a bunch of pages, THUS YOU NEED TOO CREATE AN INTERCEPTOR BUT FOR AUTH.
    //const user = useSelector<AppState,UserModel>(state=> state.user);
    // const navigate = useNavigate();

    // useEffect(()=>{
    //     if(user?.role !== Role.Admin){
    //         notify.error("You are not authorized!");
    //         navigate("/signin");
    //     }
    // },[]);


    // Instead use a custom hook
    // A custom hook is an exported function inside A custom hook ts file
    useAdmin();

    return (
        <div className="Admin">

			<p>Admin Component</p>

        </div>
    );
}
