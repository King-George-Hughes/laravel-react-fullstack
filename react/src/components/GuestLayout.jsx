import { Navigate, Outlet } from "react-router-dom";
import useStateContext from "../contexts/ContextProvider";

const GuestLayout = () => {
    const { token } = useStateContext();

    if (token) {
        return <Navigate to={"/"} />;
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Outlet />
        </div>
    );
};

export default GuestLayout;
