import { Helmet } from 'react-helmet';
import Hero from '../component/Home/Hero';
import Newsletter from '../component/Home/Newsletter';
import { Achievement } from '../component/Home/Achivement';
import Stats from '../component/Home/Stats';
import Banner from '../component/Home/Banner';
import StudentFeedback from '../component/Feedback/PopularCourseSlider';
import { Feedback } from '../component/Home/Feedback';

export const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Explore our healthy tiffin service offering freshly prepared meals delivered to your doorstep. Affordable pricing, customizable options, and timely delivery!" />
                <meta name="keywords" content="tiffin service, home food delivery, office lunch, fresh meals, nutritious tiffin, affordable tiffins, healthy lunch service" />
                <meta name="author" content="Your Tiffin Center Name" />
                <meta name="robots" content="index, follow" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Fresh & Healthy Tiffin Service - Delivered to Your Doorstep" />
                <meta property="og:description" content="Get fresh, nutritious meals delivered to your home or office. We offer affordable tiffin services with quality ingredients and timely delivery." />
                <meta property="og:url" content="https://your-tiffin-center-website.com" />
                <meta property="og:image" content="https://your-tiffin-center-website.com/images/hero-image.jpg" />
                <meta property="og:site_name" content="Your Tiffin Center" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Fresh & Healthy Tiffin Service - Delivered to Your Doorstep" />
                <meta name="twitter:description" content="Order fresh and healthy tiffins for home or office. Affordable, nutritious, and delicious meals delivered to your door." />
                <meta name="twitter:image" content="https://your-tiffin-center-website.com/images/hero-image.jpg" />
                <title>Healthy & Fresh Tiffin Service | Affordable & Nutritious Meals Delivered</title>
            </Helmet>

            <br />
            <Hero />
            <Banner />
            <StudentFeedback />
            <Stats />
            <Achievement />
            <Feedback />
            <Newsletter />
        </div>
    );
};
