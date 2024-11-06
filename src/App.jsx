import './App.css'
import Footer from './component/Footer/Footer'
import Header from './component/Header/GlassNav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Signup } from './Pages/Signup';
import { Signin } from './Pages/Signin';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
