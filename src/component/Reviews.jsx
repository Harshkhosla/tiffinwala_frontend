import { MdOutlineStar } from "react-icons/md";

export const Reviews = ({ Tiffindata }) => {
    console.log(Tiffindata.star);

    return <div>
        <div className=" flex flex-row justify-between  mt-5">
            <div className=" flex flex-row space-x-3">
                <Rating rating={Tiffindata.star} />
            </div>
            <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer">{Tiffindata.reviewCount}reviews</p>
        </div>
    </div>
}

export const Rating = ({ rating }) => {

    return (
        <div className="flex">
            {[...Array(5)].map((_, i) => (
                <div key={i}>

                    {
                        i < rating ? (
                            <MdOutlineStar className="size-6 text-starColor" />
                        ) :
                        (
                             <MdOutlineStar className="size-6 text-gray-400" />
                               )
                    }
                </div>
            ))}
        </div>
    )
} 