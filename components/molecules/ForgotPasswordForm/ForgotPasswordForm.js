import toast from 'react-hot-toast';
import { useReducer, useEffect } from 'react';
import { useAppContext } from "@context/Context";
import { ForgotPasswordReducer, ForgotPasswordInitialState } from '@reducers/ForgotPasswordReducer';
import InputField from '@components/atom/InputField/InputField';

function ForgotPasswordForm() {
    const { setIsUserLoggedIn } = useAppContext();
    const [state, dispatch] = useReducer(ForgotPasswordReducer, ForgotPasswordInitialState);
    const { email, success, error } = state;

    useEffect(() => {
        if (success) {
            toast.success(success, {
                duration: 4000,
                position: "top-right",
            });
        } else if (error) {
            toast.error(error, {
                duration: 3000,
                position: "top-right",
            });
        }
    }, [success, error]);

    const handleChange = (e) => {
        dispatch({ type: "HANDLE_CHANGE", payload: e.target });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "") {
            dispatch({ type: "HANDLE_ERROR" });
        } else {
            dispatch({ type: "HANDLE_SUCCESS" });
            setIsUserLoggedIn(true);
        }
    };

    return (
        <>
            <div className="flex justify-center">
                <img className="h-[55px] w-[310px]" src="https://uvdistage.mobileprogramming.net/usa-canada/logo.png" alt="" />
            </div>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Forgot Password
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <InputField name="email" placeHolder="Email" error={error && !email} handleChange={handleChange} />
                </div>
                <button type="submit" onClick={(e)=>{handleSubmit(e)}} className="w-full text-white bg-[#330060] hover:bg-[#5a2a84] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Reset Password</button>
            </form>
        </>
    )
}

export default ForgotPasswordForm