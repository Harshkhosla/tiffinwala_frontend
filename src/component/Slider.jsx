import React, { useEffect, useRef, useState } from "react";

const Slider = ({ children, width, isUpdateWidth = false }) => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemWidth, setItemWidth] = useState(width);
    const carouselRef = useRef(null);
    const touchStartRef = useRef(null);
    const touchEndRef = useRef(null);
    const mouseStartRef = useRef(null);


    const totalItems = React.Children.count(children);
    console.log(width, "sdkvjdvsjdn");
    const duplicatedChildren = [
        ...React.Children.toArray(children),
        ...React.Children.toArray(children),
    ];

    console.log(duplicatedChildren, "sdkvjdvsjdn");


    useEffect(() => {
        const updateItemWidth = () => {
          setItemWidth(width);
    
          if (isUpdateWidth) {
            if (window.innerWidth < 768) {
              setItemWidth(300);
            } else if (window.innerWidth < 1024) {
              setItemWidth(500);
            } else {
              setItemWidth(600);
            }
          }
        };
    
        updateItemWidth();
        window.addEventListener('resize', updateItemWidth);
        return () => {
          window.removeEventListener('resize', updateItemWidth);
        };
      }, []);

    const handleNextClick = () => {
        if (currentIndex === totalItems - 1) {
            setCurrentIndex(0)
            setScrollPosition(0)
            console.log("dskvjsdv");
        } else {
            console.log("dskvjsdv", currentIndex === totalItems - 1);
            setCurrentIndex((prev) => prev + 1)
            setScrollPosition((prevPosition) => prevPosition + itemWidth);
        }
    }

    const handlePrevClick = () => {
        if (currentIndex === 0) {
            setCurrentIndex(totalItems - 1)
            setScrollPosition((totalItems - 1) * itemWidth)
        } else {
            setCurrentIndex((prev) => prev - 1)
            setScrollPosition((prev) => prev - itemWidth)
        }
    }

    const handleTouchStart = (e) => {
        console.log("sdvksmvvmsvkvsdmkvsdklkvlsdvdlkvmnlsdkvmsdlkmv");
        console.log(e.touches[0], "dskvjnvsdjvn");

        touchStartRef.current = e.touches[0].clientX
        // handleSwipe()

    }

    const handleTouchEnd =(e)=>{
        console.log("sdvksmvvmsvkvsdmkvsdklkvlsdvdlkvmnlsdkvmsdlkmv");
        
        touchEndRef.current= e.changedTouches[0].clientX;
        handleSwipe()
    }
    const handleSwipe = () => {
        if (touchStartRef.current !== null && touchEndRef.current !== null) {
            const diff =  touchStartRef.current - touchEndRef.current 
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    handleNextClick();
                } else {
                    handlePrevClick();
                }
            }
            touchStartRef.current = null;
            touchEndRef.current = null;
        }

    }

    
    const handleMouseDown = (e) => {
        mouseStartRef.current = e.clientX;
      };

      
    const handleMouseUp = (e)=>{
        if(mouseStartRef.current!==null){
            const diff = mouseStartRef.current-e.clientX
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                  handleNextClick();
                } else {
                  handlePrevClick();
                }
              }
              mouseStartRef.current = null;
        }

    }
    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            })
        }
    }, [scrollPosition])


    return (
        <div>
            <div className="w-screen 2xl:max-w-[1320px] mx-auto overflow-hidden relative">
                <div
                    ref={carouselRef}
                    className=" flex overflow-x-hidden overflow-y-hidden space-x-4  py-4"
                    style={{ scrollSnapType: 'x mandatory' }}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}

                >
                    {duplicatedChildren.map((child, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 "
                            style={{ width: `screen` }}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            <div className='hidden md:block'>
                <button
                    onClick={handlePrevClick}
                    className="prev-arrow text-black p-[10px] rounded-lg z-20 hover:bg-primaryColor hover:text-white shadow-input bg-white ml-4 transition duration-300 ease-in-out"
                >
                    {/* <SlArrowLeft /> */}
                    {"<"}
                </button>
                <button
                    onClick={handleNextClick}
                    className="next-arrow text-black p-[10px] rounded-lg z-20 hover:bg-primaryColor hover:text-white shadow-input bg-white ml-2 transition duration-300 ease-in-out"
                >
                    {">"}
                    {/* <SlArrowRight /> */}
                </button>
            </div>

        </div>
    );
}


export default Slider
