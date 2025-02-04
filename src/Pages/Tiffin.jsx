import  { useEffect } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';  // Import React Helmet
import { BreadCrump } from "../component/BreadCrump";
import { Reviews } from "../component/Reviews";
import { ProductFeaturesDropDown } from "../component/ProductsFeaturesDropDown";
import { CardSection } from "../component/CardSection/CardSection";

const Tiffin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const Tiffindata = location.state.item;

    useEffect(() => {
        window.scrollTo(0, 0);  // Scroll to top on component mount
    }, []);

    const submitForm = () => {
        navigate('/tiffindetails', { state: { Tiffindata } })
    }

    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-7">
            <Helmet>
                {/* SEO Meta Tags */}
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={Tiffindata?.description || "Get fresh, healthy tiffins delivered to your home or office. Affordable and nutritious meals at your doorstep."} />
                <meta name="keywords" content={`tiffin, meal delivery, healthy lunch, affordable tiffins, lunch delivery, ${Tiffindata?.title}`} />
                <meta name="author" content="Your Tiffin Center" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph Meta Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={Tiffindata?.title || "Fresh & Healthy Tiffin Service"} />
                <meta property="og:description" content={Tiffindata?.description || "Fresh, nutritious meals delivered to your home or office. Affordable, delicious, and healthy lunch options."} />
                <meta property="og:url" content={`https://your-tiffin-center-website.com/tiffin/${Tiffindata?.id}`} />
                <meta property="og:image" content={Tiffindata?.image || "https://your-tiffin-center-website.com/images/default-tiffin.jpg"} />
                <meta property="og:site_name" content="Your Tiffin Center" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={Tiffindata?.title || "Fresh & Healthy Tiffin Service"} />
                <meta name="twitter:description" content={Tiffindata?.description || "Order fresh and healthy tiffins for home or office. Affordable, nutritious, and delicious meals delivered to your door."} />
                <meta name="twitter:image" content={Tiffindata?.image || "https://your-tiffin-center-website.com/images/default-tiffin.jpg"} />

                {/* Title Tag */}
                <title>{Tiffindata?.title || "Fresh & Healthy Tiffin Service"}</title>
            </Helmet>

            <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
                <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                    <BreadCrump Tiffindata={Tiffindata}/>
                    <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">{Tiffindata?.title}</h2>

                    <Reviews Tiffindata={Tiffindata}/>

                    <p className="font-normal text-base leading-6 text-gray-600 mt-7">{Tiffindata?.description}</p>

                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">₹ {Tiffindata?.price}</p>

                    <ProductFeaturesDropDown Tiffindata={Tiffindata}/>

                    <button className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6" onClick={submitForm}>{Tiffindata?.buttonText}</button>
                </div>

                <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                    <div className="w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
                        <img src={Tiffindata?.image || "https://i.ibb.co/bRg2CJj/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1.png"} alt="Tiffin Preview" />
                    </div>
                    <div className="w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
                        <div className="bg-gray-100 flex justify-center items-center py-4">
                            <img src={Tiffindata?.imagePreview1 || "https://i.ibb.co/0jX1zmR/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png"} alt="Tiffin Preview 1" />
                        </div>
                        <div className="bg-gray-100 flex justify-center items-center py-4">
                            <img src={Tiffindata?.imagePreview2 || "https://i.ibb.co/7zv1N5Q/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-2.png"} alt="Tiffin Preview 2" />
                        </div>
                        <div className="bg-gray-100 flex justify-center items-center py-4">
                            <img src={Tiffindata?.imagePreview3 || "https://i.ibb.co/0jX1zmR/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png"} alt="Tiffin Preview 3" />
                        </div>
                    </div>
                </div>
            </div>
            <CardSection Tiffindata={Tiffindata}/>
        </div>
    );
};

export default Tiffin;
