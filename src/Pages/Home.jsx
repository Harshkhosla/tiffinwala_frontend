

import Hero from '../component/Hero/Hero'
import Newsletter from '../component/Newsletter/Newsletter'
import SlidePricing from '../component/Pricing/SliderPricing'
import { Achievement } from '../component/Stats/Achivement'
import Stats from '../component/Stats/Stats'
import Banner from '../component/Banner/Banner'
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