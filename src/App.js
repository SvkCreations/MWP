import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import WhatWeDo from './components/WhatWeDo';

function App() {
  return (
    <div className="App px-0 mx-4 mx-md-5 px-md-5">
      <Navbar/>
      <Main/>
      <WhatWeDo/>
    </div>
  );
}

export default App;
