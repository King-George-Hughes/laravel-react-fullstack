import { Link } from "react-router-dom";

const Login = () => {
    const onSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <form
                onSubmit={onSubmit}
                className="bg-gray-50 p-5 w-[400px] h-[350px] flex items-center flex-col justify-evenly"
            >
                <h2 className="text-gray-800 font-medium text-2xl">
                    Log into account
                </h2>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-80 h-12 border-2 px-3"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-80 h-12 border-2 px-3"
                />
                <button
                    type="submit"
                    className="w-80 h-12 border-2 px-3 bg-purple-700 text-gray-50 text-xl"
                >
                    Login
                </button>
                <p>
                    Not Registered?{" "}
                    <Link
                        to={"/register"}
                        className="text-purple-700 font-medium"
                    >
                        Create an account.
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
