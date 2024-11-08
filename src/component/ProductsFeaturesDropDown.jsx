import { useState } from "react";

export const ProductFeaturesDropDown = ({ Tiffindata }) => {

    const [openSection, setOpenSection] = useState(null);

    const toggleDetails = (index) => {
        setOpenSection(openSection === index ? null : index);
    };
    return <div>
        <div className="lg:mt-11 mt-10">
            {Tiffindata.benefitsAndDimensions.map((data, index) => (
                < >
                    <div key={index} className="flex flex-row justify-between items-center mt-4">
                        <p className="font-medium text-base leading-4 text-gray-600">{data.heading}</p>
                        <svg
                            onClick={()=>toggleDetails(index)}
                            id="rotateSVG"
                            className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:cursor-pointer transform ${openSection === index ? "rotate-180" : "rotate-0"}`}
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    {openSection === index && (
                        <>
                            {data?.items.map((data, itemIndex) => (
                                <div key={itemIndex}>
                                    <div className="mt-2 text-gray-600">
                                        <p><strong>{data.label}:</strong> {data?.value}</p>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                    <hr className="bg-gray-200 w-full mt-4" />
                </>
            ))}
        </div>
    </div>
}