import './App.css'
import Footer from './component/Footer/Footer'
import Header from './component/Header/GlassNav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Signup } from './Pages/Auth/Signup';
import { Signin } from './Pages/Auth/Signin';
import Tiffin from './Pages/Tiffin';
import { Tiffinform } from './component/Tiffinform';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/tiffin/:id" element={<Tiffin />} />
          <Route path="/tiffindetails" element={<Tiffinform />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
