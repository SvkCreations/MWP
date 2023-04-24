import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import WhatWeDo from './components/WhatWeDo';
import WhyChooseUs from './components/WhyChooseUs';
import Aos from 'aos';
import Work from './components/Work';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  Aos.init();
  return (
    <Router>
      <div className="App">
        <div className='px-0 mx-4 mx-md-5 px-md-5'>
          <Navbar />
        </div>
        <Routes>

          <Route path='/' element={
            <div className='px-0 mx-4 mx-md-5 px-md-5'>
              <Main />
              <WhatWeDo />
            </div>
          }></Route>
          <Route path='/MWP/' element={
            <div className='px-0 mx-4 mx-md-5 px-md-5'>
              <Main />
              <WhatWeDo />
            </div>
          }></Route>

          <Route exact path='work' element={
            <div className='px-0 mx-4 mx-md-5 px-md-5'>
              <Work />
            </div>
          }></Route>

          <Route exact path='price' element={
            <div className='px-0 mx-4 mx-md-5 px-md-5'>
              <Pricing/>
            </div>
          }></Route>

<Route exact path='contact' element={
            <div className='px-0 mx-4 mx-md-5 px-md-5'>
              <Contact/>
            </div>
          }></Route>

        </Routes>

        <div className='px-0 mx-4 mx-md-5 px-md-5'>
          <WhyChooseUs />
        </div>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
