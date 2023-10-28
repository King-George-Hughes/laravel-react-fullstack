import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <div>
            <h2 className="text-2xl">DefaultLayout</h2>
            <Outlet />
        </div>
    );
};

export default DefaultLayout;
