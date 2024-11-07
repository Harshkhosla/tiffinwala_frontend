

import Hero from '../component/Home/Hero'
import Newsletter from '../component/Home/Newsletter'
import SlidePricing from '../component/Home/SliderPricing'
import { Achievement } from '../component/Home/Achivement'
import Stats from '../component/Home/Stats'
import Banner from '../component/Home/Banner'
import StudentFeedback from '../component/Feedback/PopularCourseSlider'



export const Home = () => {
    return <div>
        <br />
        <Hero />
        <Banner />
        <StudentFeedback />
        <Stats />
        <Achievement />
        <SlidePricing />
        <Newsletter />
    </div>
}