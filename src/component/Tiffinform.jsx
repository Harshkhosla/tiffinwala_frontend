import { useDispatch, useSelector } from "react-redux"
import { Input } from "./input/Input"
import { useState } from "react";
import { FormSubmittion } from "../redux/userSlice";
import useApi from "../hooks/useApi";
import { useNavigate } from "react-router-dom";


const Loader = () => (
    <div className="flex items-center justify-center">
        <div className="loader border-t-4 border-orange-500 rounded-full w-8 h-8 animate-spin"></div>
    </div>
);


export const Tiffinform = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { callApi } = useApi()
    const { data, loading } = useSelector(state => state)
    console.log(data, "sdkjsbhbsd");
    const userVal = data?.userData
    const [formsubmittion, SetSubmittion] = useState({
        email: userVal?.email || "",
        name: userVal?.name || "",
        plan: "7-days",
        phone: ""
    })
    console.log(formsubmittion);

    const handleChnage = (e) => {
        const { name, value } = e.target
        SetSubmittion(data => ({
            ...data, ...userVal, [name]: value
        }))
    }


    const FormSubmit = (e) => {
        // e.preventDefault();
        console.log(formsubmittion, "vkjsdvnbsjkvvb");
        dispatch(FormSubmittion({ formsubmittion, callApi ,navigate}))
    }
    return <div>
        <br />
        <br />
        <br />
        <br />

        <div className=" flex-col  ">

            <div>
                <h2 className="text-2xl justify-center my-20 font-semibold flex gap-2">We Have added your tiffin just fill the form and we will reach to you Our self</h2>
            </div>
            {data.loading ? (
                <Loader /> // Show loader when loading is true
            ) : (
                <form class="max-w-sm mx-auto">
                    <div className="flex flex-col">
                        <Input name={"name"} placeholder={"Enter name"} onChange={handleChnage} value={formsubmittion.name} />
                        <Input name={"email"} placeholder={"Enter email"} onChange={handleChnage} value={formsubmittion.email} />
                        <Input name={"phone"} placeholder={"Enter Phone No"} onChange={handleChnage} value={formsubmittion.phone} />
                        <label for="countries" class="block  ">Select your plan</label>
                        <select id="plan" name="plan" onChange={handleChnage} class="bg-gray-100 w-full text-sm text-gray-800 px-4 py-4 focus:bg-transparent outline-orange-300 transition-all">
                            <option>7-days</option>
                            <option>15-days</option>
                            <option>30-days</option>
                        </select>

                    </div>
                </form>
            )}
            <div className="max-w-sm mx-auto mt-10">
                <button onClick={FormSubmit} class="w-full py-4 px-8 text-sm tracking-wide font-semibold text-white bg-orange-500 hover:bg-orange-600 focus:outline-none" >Submit </button>
            </div>
        </div>


    </div>
}