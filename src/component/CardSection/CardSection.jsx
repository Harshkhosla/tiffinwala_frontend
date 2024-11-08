import { Card } from "../Card";

export const CardSection =({Tiffindata})=>{
    console.log(Tiffindata);
    
    return <div>
         <div className="flex  justify-center items-center w-full">
                <div className="w-full  sm:w-96 md:w-8/12 lg:w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-28 sm:gap-x-6 sm:gap-y-12 gap-y-12 sm:mt-14 mt-10">
                    {Tiffindata.features?.map((data, index) => (
                        <Card data ={data} index ={index}/>
                    ))}
                </div>
            </div>
    </div>
}