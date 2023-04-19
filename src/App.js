import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import WhatWeDo from './components/WhatWeDo';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <>
      <div className="App px-0 mx-4 mx-md-5 px-md-5">
        <Navbar />
        <Main />
        <WhatWeDo />
        <WhyChooseUs />
      </div>
      <Footer />
    </>
  );
}

export default App;
