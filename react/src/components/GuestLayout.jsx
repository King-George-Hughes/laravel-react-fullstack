import { Outlet } from "react-router-dom";

const GuestLayout = () => {
    return (
        <div>
            <h2 className="text-2xl">GuestLayout</h2>
            <Outlet />
        </div>
    );
};

export default GuestLayout;
