export const BreadCrump =({Tiffindata})=>{
return (
    <div>
         <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600">Home / Tiffin /{" "}{Tiffindata?.title}</p>  
    </div>
)
}