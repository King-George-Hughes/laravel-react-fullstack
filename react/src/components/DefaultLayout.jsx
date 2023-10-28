import { Link, Navigate, Outlet } from "react-router-dom";
import useStateContext from "../contexts/ContextProvider";

const DefaultLayout = () => {
    const { user, token } = useStateContext();

    if (!token) {
        return <Navigate to={"/login"} />;
    }

    return (
        <div className="w-full h-full flex relative">
            <aside className="w-[200px] h-screen bg-purple-800 flex flex-col gap-2 pt-10 px-2 items-start text-gray-50">
                <Link
                    to={"/dashboard"}
                    className="hover:bg-purple-900 w-full p-2 rounded-md"
                >
                    Dashboard
                </Link>
                <Link
                    to={"/users"}
                    className="hover:bg-purple-900 w-full p-2 rounded-md"
                >
                    Users
                </Link>
            </aside>
            <div className="relative w-full">
                <header className="bg-gray-50 w-full h-[60px] flex items-center justify-between px-5">
                    <div>Header</div>
                    <div>User Info</div>
                </header>
                <main className="mt-5 p-5">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DefaultLayout;
