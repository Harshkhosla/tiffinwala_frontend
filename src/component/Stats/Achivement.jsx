
export function Achievement() {
    return (
      <div className="max-w-[1320px] mx-4 xl:mx-auto py-[50px] md:py-[100px]">
        <div className="flex xl:block flex-col justify-center items-center">
          <div className="text-2xl md:text-3xl lg:text-[40px] font-semibold flex gap-2 relative">
            <p>Our</p>
            <p className="text-#365CCE">Achievement</p>
            <img
              src={"require('/assets/bottom_vector.svg').default}"}
              alt="image bottom vector"
              width={150}
              height={50}
              className="absolute top-[24px] md:top-[35px] left-10 md:left-24"
            />
          </div>
          <div>
            <p className="text-primaryGray text-md mt-4 text-center md:text-left">
              Various versions have evolved over the years, sometimes by accident,
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-[241px] ">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 md:gap-10 lg:gap-[100px] xl:gap-[244px]">
            <div className="flex  flex-col gap-6 sm:gap-[50px] flex-wrap">
              <div className="flex items-center gap-2 sm:gap-6">
                <div>
                  <img
                    src='assets/bottom_hero_img.png'
                    alt="image"
                    height={64}
                    width={64}
                    className="h-16 w-16"
                  />
                </div>
                <div>
                  <p className="font-semibold sm:text-2xl">300</p>
                  <p className="font-normal text-lg text-primaryGray">
                    Instructor
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-6">
                <div>
                  <img
                    src={'/assets/images/img.svg'}
                    alt="image"
                    height={64}
                    width={64}
                    className="h-16 w-16"
                  />
                </div>
                <div>
                  <p className="font-semibold sm:text-2xl">10,000+</p>
                  <p className="font-normal text-lg text-primaryGray">Videos</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 sm:gap-[50px]">
              <div className="flex items-center gap-2 sm:gap-6">
                <div>
                  <img
                    src={'/assets/images/img4.svg'}
                    alt="image"
                    height={64}
                    width={64}
                    className="h-16 w-16"
                  />
                </div>
                <div>
                  <p className="font-semibold sm:text-2xl">20,000+</p>
                  <p className="font-normal text-lg text-primaryGray">Students</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-6">
                <div>
                  <img
                    src={'/assets/images/img5.svg'}
                    alt="image"
                    height={64}
                    width={64}
                    className="h-16 w-16"
                  />
                </div>
                <div>
                  <p className="font-semibold sm:text-2xl">1,00,000+</p>
                  <p className="font-normal text-lg text-primaryGray">
                    User&apos;s
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={'/assets/images/img1.png'}
              alt="image"
              height={222}
              width={332}
              className="sm:h-[250px] md:h-auto w-[250px] md:w-[332px]"
            />
            <img
              src={'/assets/images/Sparkle.svg'}
              alt="image"
              height={60}
              width={60}
              className="absolute bottom-10 left-[-35px]"
            />
            <img
              src={'/assets/images/StarFour.svg'}
              alt="image"
              height={24}
              width={24}
              className="absolute top-9 right-[-10px] "
            />
            <div className="w-2 h-2 bg-[#20B486] rounded-full absolute left-20 bottom-[-19px]"></div>
            <div className="w-3 h-3 bg-[#1A906B] rounded-full absolute top-5 right-24"></div>
            <div className="w-[18px] h-[18px] bg-[#ED4459] rounded-full absolute top-28 right-10"></div>
          </div>
        </div>
      </div>
    );
  }