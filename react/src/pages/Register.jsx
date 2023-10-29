import { useRef } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordComfirmationRef = useRef();

    const onSubmit = (event) => {
        event.preventDefault();

        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_comfirmation: passwordComfirmationRef.current.value,
        };

        console.log(payload);
    };

    return (
        <form
            onSubmit={onSubmit}
            className="bg-gray-50 p-5 w-[400px] h-[450px] flex items-center flex-col justify-evenly"
        >
            <h2 className="text-gray-800 font-medium text-2xl">
                Create an account
            </h2>
            <input
                ref={nameRef}
                type="text"
                placeholder="Name"
                className="w-80 h-12 border-2 px-3"
            />
            <input
                ref={emailRef}
                type="email"
                placeholder="Email"
                className="w-80 h-12 border-2 px-3"
            />
            <input
                ref={passwordRef}
                type="password"
                placeholder="Password"
                className="w-80 h-12 border-2 px-3"
            />
            <input
                ref={passwordComfirmationRef}
                type="password"
                placeholder="Comfirm Password"
                className="w-80 h-12 border-2 px-3"
            />
            <button
                type="submit"
                className="w-80 h-12 border-2 px-3 bg-purple-700 text-gray-50 text-xl"
            >
                Register
            </button>
            <p>
                Already a user?{" "}
                <Link to={"/login"} className="text-purple-700 font-medium">
                    Sign in.
                </Link>
            </p>
        </form>
    );
};

export default Register;
