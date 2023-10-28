import { Navigate, Outlet } from "react-router-dom";
import useStateContext from "../contexts/ContextProvider";

const GuestLayout = () => {
    const { token } = useStateContext();

    if (token) {
        return <Navigate to={"/"} />;
    }

    return (
        <div>
            <h2 className="text-2xl">GuestLayout</h2>
            <Outlet />
        </div>
    );
};

export default GuestLayout;
