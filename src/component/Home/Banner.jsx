import React from "react";

function Banner() {

  
  return (
    <>
      {/* <div className="bg-gray-200 "> */}
        <div className="px-3 py-12 mt-10">
          <div className="lg:max-w-[1280px] md:max-w-[696px] max-w-[343px] mx-auto bg-white lg:px-20 md:px-6 px-4 py-12">
            <div className="lg:flex md:flex block">
              <div className="flex">
                <div className="bg-orange-800 max-w-[66px] w-full">
                  <p className="xl:text-2xl lg:text-base font-semibold leading-normal text-white -rotate-90 whitespace-nowrap 2xl:mt-32 xl:mt-[130px] lg:mt-[140%] md:mt-[85px] mt-28">
                    Upto 50% Off 
                  </p>
                </div>
                <div>
                  <img
                    src="https://t3.ftcdn.net/jpg/11/09/54/18/360_F_1109541824_wQecC5PCTwAFaGi8EdpdHszKC8yBk1Mw.webp"
                    alt="shoes"
                    className="lg:hidden md:hidden block"
                  />
                </div>
              </div>
              <div>
                <img
                  src="https://t3.ftcdn.net/jpg/11/09/54/18/360_F_1109541824_wQecC5PCTwAFaGi8EdpdHszKC8yBk1Mw.webp"
                  alt="shoes"
                  className="lg:block md:hidden hidden"
                />
                <img
                  src="https://t3.ftcdn.net/jpg/09/64/34/46/360_F_964344696_J9d6AHvYD691TKiaFBMN6cbWC6JalUDt.webp"
                  alt
                  className="lg:hidden md:block hidden"
                />
              </div>
              <div className="bg-orange-300 lg:py-2 md:py-2 py-4 lg:px-5 md:px-4 px-3 flex flex-col items-center justify-center">
                <p className="lg:text-4xl md:text-2xl text-2xl font-semibold text-center text-white">
                Fresh Tiffins
                </p>
                <p className="text-xs text-center text-white pt-4">
                Bringing you homemade flavors with love, crafted to perfection 
                for your daily delight.
                </p>
              </div>
              <div>
                <img
                  src="https://t3.ftcdn.net/jpg/09/64/34/46/360_F_964344696_J9d6AHvYD691TKiaFBMN6cbWC6JalUDt.webp"
                  alt="sandles"
                  className="lg:block md:hidden block"
                />
                <img
                  src="https://t3.ftcdn.net/jpg/09/64/34/46/360_F_964344696_J9d6AHvYD691TKiaFBMN6cbWC6JalUDt.webp"
                  alt
                  className="lg:hidden md:block hidden"
                />
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Banner;
