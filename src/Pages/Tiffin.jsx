import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { BreadCrump } from "../component/BreadCrump";
import { Reviews } from "../component/Reviews";
import { ProductFeaturesDropDown } from "../component/ProductsFeaturesDropDown";
import { CardSection } from "../component/CardSection/CardSection";

const Tiffin = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const Tiffindata = location.state.item;

  

    useEffect(() => {
        window.scrollTo(0, 0);  // Scroll to top on component mount
    }, []);
  
    const submitForm = () => {
        navigate('/tiffindetails', { state: { Tiffindata } })
    }
   

    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-7">
            <div className="flex justify-center items-center lg:flex-row flex-col gap-8">

                <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                <BreadCrump Tiffindata={Tiffindata}/>
                   <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">{Tiffindata?.title}</h2>

                   <Reviews Tiffindata={Tiffindata}/>

                    <p className=" font-normal text-base leading-6 text-gray-600 mt-7">{Tiffindata?.description}</p>

                    <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">₹ {Tiffindata?.price}</p>

                  <ProductFeaturesDropDown Tiffindata={Tiffindata}/>

                    <button className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6" onClick={submitForm}>{Tiffindata?.buttonText}</button>
                </div>

                <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                    <div className=" w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
                        <img src="https://i.ibb.co/bRg2CJj/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1.png" alt="Wooden Chair Previw" />
                    </div>
                    <div className=" w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
                        <div className="bg-gray-100 flex justify-center items-center py-4">
                            <img src="https://i.ibb.co/0jX1zmR/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png" alt="Wooden chair - preview 1" />
                        </div>
                        <div className="bg-gray-100 flex justify-center items-center py-4">
                            <img src="https://i.ibb.co/7zv1N5Q/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-2.png" alt="Wooden chair - preview 2" />
                        </div>
                        <div className="bg-gray-100 flex justify-center items-center py-4">
                            <img src="https://i.ibb.co/0jX1zmR/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png" alt="Wooden chair- preview 3" />
                        </div>
                    </div>
                </div>
            </div>
           <CardSection Tiffindata={Tiffindata}/>
        </div>
    );
};

export default Tiffin;
