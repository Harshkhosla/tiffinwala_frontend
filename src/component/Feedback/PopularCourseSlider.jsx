import React, { useState, useRef, useEffect } from 'react';
import { MdOutlineStar } from 'react-icons/md';
import { HiArrowUpRight } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { Rating } from '../Reviews';

const TiffinPlansData = [
  {
    title: '7 Days Basic Tiffin Plan',
    img_path: 'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png',
    star: 4,
    reviewCount: 15,
    price: 800,
    category: 'Tiffin Service',
    description: 'Enjoy fresh, home-style meals for a week. Ideal for those wanting a short-term meal solution.',
    benefitsAndDimensions: [
      {
        heading: 'Benefits',
        items: [
          { label: 'Benefit', value: 'Fresh meals daily' },
          { label: 'Benefit', value: 'No commitment beyond 7 days' },
          { label: 'Benefit', value: 'Free delivery at your convenience' },
        ]
      },
      {
        heading: 'Dimensions',
        items: [
          { label: 'Weight', value: '1kg per meal' },
          { label: 'Servings', value: 'One-person servings' }
        ]
      }
    ],
    quantity: 1,
    features: [
      { icon: '🍹', title: 'Fresh Ingredients', text: 'Sourced daily to ensure freshness in every meal.' },
      { icon: '🍽️', title: 'Eco-friendly Packaging', text: 'Meals are packed in biodegradable containers.' },
      { icon: '🕒', title: 'On-time Delivery', text: 'Meals delivered at a time convenient to you.' },
    ],
    buttonText: 'Add to Tiffin Bag',
    id: 1
  },
  {
    title: '15 Days Standard Tiffin Plan',
    img_path: 'https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg',
    star: 4.5,
    reviewCount: 30,
    price: 1500,
    category: 'Tiffin Service',
    description: 'Our 15-day plan offers nutritious, tasty meals ideal for busy professionals or students.',
    benefitsAndDimensions: [
      {
        heading: 'Benefits',
        items: [
          { label: 'Benefit', value: 'Affordable and balanced meal plan' },
          { label: 'Benefit', value: 'Customizable for dietary needs' },
          { label: 'Benefit', value: 'High-quality ingredients with doorstep delivery' },
        ]
      },
      {
        heading: 'Dimensions',
        items: [
          { label: 'Weight', value: '1kg per meal' },
          { label: 'Servings', value: 'One-person servings' }
        ]
      }
    ],
    quantity: 1,
    features: [
      { icon: '💪', title: 'Nutritious Meals', text: 'Balanced meals with essential nutrients.' },
      { icon: '🚚', title: 'Free Delivery', text: 'Get your meals delivered to your doorstep without extra charges.' },
      { icon: '♻️', title: 'Eco-friendly Packaging', text: 'Meals are delivered in biodegradable containers.' },
    ],
    buttonText: 'Add to Tiffin Bag',
    id: 2
  },
  {
    title: '30 Days Premium Tiffin Plan',
    img_path: 'https://img.freepik.com/free-photo/papadom-sauces_74658-93.jpg?ga=GA1.1.1856977439.1735992280&semt=ais_hybrid',
    star: 5,
    reviewCount: 50,
    price: 2800,
    category: 'Tiffin Service',
    description: 'A month-long plan with a wide variety of dishes to keep meals exciting and healthy.',
    benefitsAndDimensions: [
      {
        heading: 'Benefits',
        items: [
          { label: 'Benefit', value: 'Best value for frequent customers' },
          { label: 'Benefit', value: 'Daily variety of meals' },
          { label: 'Benefit', value: 'Prioritized delivery and customer support' },
        ]
      },
      {
        heading: 'Dimensions',
        items: [
          { label: 'Weight', value: '1kg per meal' },
          { label: 'Servings', value: 'One-person servings' }
        ]
      }
    ],
    quantity: 1,
    features: [
      { icon: '🌟', title: 'Variety of Dishes', text: 'New dishes every day to keep meals interesting.' },
      { icon: '🛡️', title: 'Health-focused', text: 'Meals designed to support a healthy lifestyle.' },
      { icon: '💼', title: 'Priority Support', text: 'Dedicated support for long-term customers.' },
    ],
    buttonText: 'Add to Tiffin Bag',
    id: 3
  },
  {
    title: 'Lunch Only Plan - 7 Days',
    img_path: 'https://img.freepik.com/free-vector/hand-drawn-indian-cuisine-illustration_23-2149333566.jpg?ga=GA1.1.1856977439.1735992280&semt=ais_hybrid',
    star: 4,
    reviewCount: 10,
    price: 500,
    category: 'Lunch Tiffin',
    description: 'Convenient lunch-only plan for a week. Perfect for individuals needing lunch at work or home.',
    benefitsAndDimensions: [
      {
        heading: 'Benefits',
        items: [
          { label: 'Benefit', value: 'Simple and affordable' },
          { label: 'Benefit', value: 'Delicious, fulfilling lunches' },
          { label: 'Benefit', value: 'Ideal for office-goers and students' },
        ]
      },
      {
        heading: 'Dimensions',
        items: [
          { label: 'Weight', value: '1kg per meal' },
          { label: 'Servings', value: 'One-person servings' }
        ]
      }
    ],
    quantity: 1,
    features: [
      { icon: '🍛', title: 'Fulfilling Lunch', text: 'Hearty meals designed to keep you full through the day.' },
      { icon: '🥗', title: 'Balanced Diet', text: 'Includes a mix of carbs, proteins, and greens.' },
      { icon: '🚀', title: 'Quick Delivery', text: 'Lunches delivered right in time for your lunch break.' },
    ],
    buttonText: 'Add to Tiffin Bag',
    id: 4
  },
  {
    title: 'Dinner Only Plan - 15 Days',
    img_path: 'https://img.freepik.com/free-vector/hand-drawn-indian-cuisine-illustration_23-2149323580.jpg?ga=GA1.1.1856977439.1735992280&semt=ais_hybrid',
    star: 4.2,
    reviewCount: 18,
    price: 1000,
    category: 'Dinner Tiffin',
    description: 'Dinner-only plan for 15 days, offering balanced and wholesome meals every night.',
    benefitsAndDimensions: [
      {
        heading: 'Benefits',
        items: [
          { label: 'Benefit', value: 'Healthy dinners delivered daily' },
          { label: 'Benefit', value: 'Perfect for individuals with busy evenings' },
          { label: 'Benefit', value: 'Free delivery after work hours' },
        ]
      },
      {
        heading: 'Dimensions',
        items: [
          { label: 'Weight', value: '1kg per meal' },
          { label: 'Servings', value: 'One-person servings' }
        ]
      }
    ],
    quantity: 1,
    features: [
      { icon: '🍲', title: 'Hearty Dinners', text: 'Warm, filling meals to end your day.' },
      { icon: '🥘', title: 'Wholesome Ingredients', text: 'Includes proteins, veggies, and grains for a balanced meal.' },
      { icon: '🌜', title: 'Evening Delivery', text: 'Deliveries timed for dinner hours.' },
    ],
    buttonText: 'Add to Tiffin Bag',
    id: 5
  },
  {
    title: 'Monthly Family Plan (2 Members)',
    img_path: 'https://img.freepik.com/free-vector/indian-food-horizontal-banners-set_1284-11948.jpg?ga=GA1.1.1856977439.1735992280&semt=ais_hybrid',
    star: 4.8,
    reviewCount: 35,
    price: 5000,
    category: 'Family Tiffin',
    description: 'A monthly tiffin service for two, perfect for small families seeking a convenient meal solution.',
    benefitsAndDimensions: [
      {
        heading: 'Benefits',
        items: [
          { label: 'Benefit', value: 'Balanced meals for two' },
          { label: 'Benefit', value: 'Great savings for family plans' },
          { label: 'Benefit', value: 'Flexible meal options for family needs' },
        ]
      },
      {
        heading: 'Dimensions',
        items: [
          { label: 'Weight', value: '1.5kg per meal' },
          { label: 'Servings', value: 'Two-person servings' }
        ]
      }
    ],
    quantity: 2,
    features: [
      { icon: '👫', title: 'Family-friendly Portions', text: 'Sized appropriately for two people.' },
      { icon: '💸', title: 'Great Savings', text: 'Affordable for families with busy schedules.' },
      { icon: '🗓️', title: 'Monthly Convenience', text: 'No need to worry about daily orders.' },
    ],
    buttonText: 'Add to Tiffin Bag',
    id: 6
  },
  {
    title: 'Monthly Family Plan (4 Members)',
    img_path: 'https://img.freepik.com/free-photo/side-view-casserole-with-sauces_140725-14095.jpg?ga=GA1.1.1856977439.1735992280&semt=ais_hybrid',
    star: 4.9,
    reviewCount: 45,
    price: 9000,
    category: 'Family Tiffin',
    description: 'A convenient monthly meal plan designed for families of four with a variety of dishes.',
    benefitsAndDimensions: [
      {
        heading: 'Benefits',
        items: [
          { label: 'Benefit', value: 'Delicious meals for the entire family' },
          { label: 'Benefit', value: 'Affordable family-sized portions' },
          { label: 'Benefit', value: 'Wide variety to satisfy everyone' },
        ]
      },
      {
        heading: 'Dimensions',
        items: [
          { label: 'Weight', value: '2.5kg per meal' },
          { label: 'Servings', value: 'Four-person servings' }
        ]
      }
    ],
    quantity: 4,
    features: [
      { icon: '👨‍👩‍👧‍👦', title: 'Perfect for Families', text: 'Meals sized to feed four people.' },
      { icon: '🍴', title: 'Wide Variety', text: 'Different meals to suit everyone’s tastes.' },
      { icon: '🎉', title: 'Family Specials', text: 'Includes special family-sized dishes on weekends.' },
    ],
    buttonText: 'Add to Tiffin Bag',
    id: 7
  }
];






function PopularCourseSlider() {
  return (
    <div className="bg-[#FEEDE0]  rounded-lg">
      <div className="py-[50px] md:py-[100px]  mx-4 ">
        <div className="overflow-hidden max-w-[1320px] lg:mx-auto">
          <div className="relative flex flex-col lg:flex-row items-center gap-10">
            <div className="text-2xl md:text-3xl lg:text-[40px] font-semibold flex lg:flex-col gap-2 relative">
              <p>Most</p>
              <p className="text-#365CCE">Popular</p>
              <p className="text-#365CCE">Tiffin</p>
              <img
                src="/assets/bottom_vector.svg"
                alt="image bottom vector"
                width={120}
                height={50}
                className="absolute top-[30px] left-[90px]  lg:top-[77px] lg:left-0"
              />
            </div>
            <Slider width={290}>
              {TiffinPlansData.map((course, index) => (
                <CourseCard key={index} item={course} />
              ))}
            </Slider>
            {/* <div className="hidden xl:block absolute h-[350px] w-60 bg-white opacity-80 top-4 right-0 z-50 rounded-xl "></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
function CourseCard({ item }) {
  console.log(item.id);

  const navigator = useNavigate();

  const Navigation = (item) => {
    console.log(item, "sdkvdhsbshjvb");
    navigator(`/tiffin/${item?.id}`,{state:{item}})
  }
  return (
    <div className="bg-white max-w-[250px] sm:max-w-[280px] rounded-2xl shadow-custom-box-shadow  hover:shadow-card select-none">
      <div className="p-4">
        <div className="relative">
          <img
            src={item?.img_path}
            alt="image"
            width={210}
            height={207}
            className="rounded-lg bg-transparent"
          />
          <div className="absolute z-10 top-0 left-0 bg-[#cec3b9] py-[6px] px-[13px] rounded-md m-[6px]">
            <p>{item?.tag}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[18px] mt-4">
          <p className="text-[#363A3D] font-medium sm:text-xl overflow-hidden">
            {item?.title.slice(0, 23)}...
          </p>{' '}
          <div className="flex items-center gap-[11px]">
            <div className="flex items-center gap-[6px]">
            <Rating rating ={item?.star}/>
            </div>
            <div>
              <p className="text-[#52565C]  ">({item?.reviewCount})</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center border-t border-b-gray-300 p-4">
        <div>
          <p className="sm:text-2xl font-semibold">$ {item?.price}</p>
        </div>
        <div className="p-[10px] shadow-custom-box-shadow cursor-pointer hover:bg-orange-400 hover:text-white  rounded-lg transition duration-300 ease-in-out" onClick={() => Navigation(item)}>
          <HiArrowUpRight />
        </div>
      </div>
    </div>
  );
}
function Slider({ children, width, isUpdateWidth = false }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(width);
  const carouselRef = useRef(null);
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);
  const mouseStartRef = useRef(null);
  const totalItems = React.Children.count(children);
  const duplicatedChildren = [
    ...React.Children.toArray(children),
    ...React.Children.toArray(children),
  ];
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
  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(totalItems - 1);
      setScrollPosition((totalItems - 1) * itemWidth);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setScrollPosition((prevPosition) => prevPosition - itemWidth);
    }
  };
  const handleNextClick = () => {
    if (currentIndex === totalItems - 1) {
      setCurrentIndex(0);
      setScrollPosition(0);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setScrollPosition((prevPosition) => prevPosition + itemWidth);
    }
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setScrollPosition(index * itemWidth);
  };
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    touchEndRef.current = e.changedTouches[0].clientX;
    handleSwipe();
  };
  const handleSwipe = () => {
    if (touchStartRef.current !== null && touchEndRef.current !== null) {
      const diff = touchStartRef.current - touchEndRef.current;
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
  };
  const handleMouseDown = (e) => {
    mouseStartRef.current = e.clientX;
  };
  const handleMouseUp = (e) => {
    if (mouseStartRef.current !== null) {
      const diff = mouseStartRef.current - e.clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          handleNextClick();
        } else {
          handlePrevClick();
        }
      }
      mouseStartRef.current = null;
    }
  };
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [scrollPosition]);
  return (
    <div>
      <div className="w-screen 2xl:max-w-[1320px] mx-auto overflow-hidden relative">
        <div
          ref={carouselRef}
          className="flex space-x-4 overflow-x-hidden overflow-y-hidden py-4"
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
      <div className="flex justify-center items-center mt-4 2xl:mr-28">
        {/* gap-0 md:gap-52  */}
        <div className="flex gap-2">
          {Array.from({ length: totalItems }).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-#365CCE' : 'bg-gray-300'
                }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
        <div>
          {/* <div className='hidden md:block'>
                        <button
                            onClick={handlePrevClick}
                            className="prev-arrow text-black p-[10px] rounded-lg z-20 hover:bg-#365CCE hover:text-white shadow-input bg-white ml-4 transition duration-300 ease-in-out"
                        >
                            <SlArrowLeft />
                        </button>
                        <button
                            onClick={handleNextClick}
                            className="next-arrow text-black p-[10px] rounded-lg z-20 hover:bg-#365CCE hover:text-white shadow-input bg-white ml-2 transition duration-300 ease-in-out"
                        >
                            <SlArrowRight />
                        </button>
                    </div> */}
        </div>
      </div>
    </div>
  );
}
export default PopularCourseSlider;
