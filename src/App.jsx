import './App.css'
import Banner from './component/Banner/Banner'
import StudentFeedback from './component/Feedback/StudentFeedback'
import Footer from './component/Footer/Footer'
import Header from './component/Header/GlassNav'
import Hero from './component/Hero/Hero'
import Newsletter from './component/Newsletter/Newsletter'
import SlidePricing from './component/Pricing/SliderPricing'
import { Achievement } from './component/Stats/Achivement'
import Stats from './component/Stats/Stats'

function App() {

  return (
    <>
    <Header/>
    <Hero/>
    <Banner/>
    <Stats/>
    {/* <StudentFeedback/> */}
    <Achievement/>
    <SlidePricing/>
    <Newsletter/>
   <Footer/>
    </>
  )
}

export default App
