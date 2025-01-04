export const FeedbackCard = ({ item }) => {
    console.log(item, "dksvhjsdv");

    return <>
        <div className="shadow-custom-box-shadow  p-5 w-[90vw] md:w-[500px] relative  lg:w-[600px] border-2 rounded-[30px]">

            <div className="flex items-center">
                <img src={item.imagePath}></img>
                <div className="pl-3">
                    <div className="text-xl font-bold">{item.name}</div>
                    <div className="text-md">{item.role}</div>
                </div>
            </div>
            <div className="mt-[23px] ">
                <p>{item.description.slice(0, 250) + '...'}</p>
            </div>
            <img
                src={'/assets/images/feedback_logo.svg'}
                alt="image"
                height={31}
                width={44}
                className="h-6 w-8 md:h-8 md:w-11 absolute top-3 right-8"
            />
        </div>
    </>
}