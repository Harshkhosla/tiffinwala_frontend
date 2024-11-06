import React from "react";

export const Input =React.memo(({ name, placeholder, onChange })=>{
    // console.log(props);
    
    return <div>
         <input name={name} type="text" class="bg-gray-100 w-full text-sm text-gray-800 px-4 py-4 focus:bg-transparent outline-orange-300 transition-all" placeholder={placeholder} onChange={onChange}/>
    </div>
})