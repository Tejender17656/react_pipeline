import toast from 'react-hot-toast';
import { useReducer, useEffect } from 'react';
import { useAppContext } from "@context/Context";
import { LoginReducer, LoginInitialState } from '@reducers/LoginReducer';
import InputField from '@components/atom/InputField/InputField';

function LoginForm() {
    const { setIsUserLoggedIn, setCurrentModal, setUserData, userData } = useAppContext();
    const [state, dispatch] = useReducer(LoginReducer, LoginInitialState);
    const { email, password, remember, success, error } = state;

    useEffect(() => {
        if (success) {
            toast.success(success, {
                duration: 4000,
                position: "top-right",
            });
        } else if (error) {
            toast.error(error, {
                duration: 4000,
                position: "top-right",
            });
        }
    }, [success, error]);

    const handleChange = (e) => {
        dispatch({ type: "HANDLE_CHANGE", payload: e.target });
    };

    const handleCheckbox = (e) => {
        dispatch({ type: "HANDLE_CHECKBOX", payload: e.target });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            dispatch({ type: "HANDLE_ERROR" });
        } else {
            dispatch({ type: "HANDLE_SUCCESS" });
            setUserData({
                ...userData, email: email,
                remember: remember,
                isUserLoggedIn: true
            })
            setIsUserLoggedIn(true);
        }
    };

    return (
        <>
            <div className="flex justify-center">
                <img className="h-[55px] w-[310px]" src="https://uvdistage.mobileprogramming.net/usa-canada/logo.png" alt="" />
            </div>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <InputField name="email" placeHolder="username or email" error={error && !email} handleChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <InputField name="password" placeHolder="••••••••" error={error && !password} handleChange={handleChange} />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" name="remember" aria-describedby="remember" type="checkbox" onChange={handleCheckbox} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500">Remember me</label>
                        </div>
                    </div>
                    <a href="#" onClick={() => setCurrentModal("forgot")} className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
                </div>
                <button type="submit" onClick={(e) => { handleSubmit(e) }} className="w-full text-white bg-[#330060] hover:bg-[#5a2a84] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
            </form>
        </>
    )
}

export default LoginForm