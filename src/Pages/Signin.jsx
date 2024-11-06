
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../component/input/Input";
import { login } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import useApi from "../hooks/useApi";

export const Signin = () => {

    const navigate = useNavigate();

    const { data, error, loading, callApi } = useApi();

    const dispatch = useDispatch();
    const [userData, SetUserData] = useState({
        name: "",
        password: ''
    })


    const handleChnage = useCallback((e) => {
        console.log(e.target.name);

        const { name, value } = e.target;
        SetUserData((data) => ({
            ...data,
            [name]: value
        }))
    }, [])


    const handleSubmit = async () => {
        dispatch(login({ userData, navigate, callApi }))
    };


    return <div>
        <br />
        <br />
        <br />
        <div class="flex flex-col justify-center font-[sans-serif] p-4">
            <div class="max-w-md w-full mx-auto shadow-[0_2px_10px_-2px_rgba(195,169,50,0.5)] p-8 relative mt-12">
                <div class="bg-white w-24 h-24 border-[10px] p-1.5 absolute left-0 right-0 mx-auto -top-12 rounded-full overflow-hidden">
                    <a href="javascript:void(0)"><img
                        src="https://readymadeui.com/readymadeui-short.svg" alt="logo" class='w-full inline-block' />
                    </a>
                </div>

                <form class="mt-12">
                    <h3 class="text-xl font-bold text-orange-500 mb-8 text-center">Login account</h3>
                    <div class="space-y-4">
                        {/* <Input name={"name"} placeholder={"Enter name"} onChange={handleChnage}  /> */}
                        <Input name={"email"} placeholder={"Enter email"} onChange={handleChnage} />
                        <Input name={"password"} placeholder={"Enter password"} onChange={handleChnage} />
                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 border-gray-300 rounded" />
                            <label for="remember-me" class="ml-3 block text-sm text-gray-800">
                                I accept the <a href="javascript:void(0);" class="text-orange-500 font-semibold hover:underline ml-1">Terms and Conditions</a>
                            </label>
                        </div>
                    </div>

                    <div class="mt-8">
                        <button type="button" onClick={handleSubmit} class="w-full py-4 px-8 text-sm tracking-wide font-semibold text-white bg-orange-500 hover:bg-orange-600 focus:outline-none">
                            Login
                        </button>
                    </div>
                    <p class="text-sm mt-8 text-center text-gray-800">Already have an account? <Link to="/signup" class="text-orange-500 font-semibold hover:underline ml-1">Login here</Link></p>
                </form>
            </div>
        </div>
    </div>
}