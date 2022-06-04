
// import './App.css';
// import NavbarComp from './Components/NavbarComp';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './Pages/Home'
// import About from './Pages/About'
// import NotFound from './Pages/NotFound'
// import Create from './Components/Create'

// function App() {
//   return (
//     <div className='App'>
//       <NavbarComp />
//       <Student />
//       <Router>
//         <Routes>
//           <Route path="/" element={<App />} />
//           <Route path="/home" element={<App />} />
//           <Route path="/about" element={<About />} />
//           <Route path='/create' element={<Create />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
// important imports
import React from 'react'
import { BrowserRouter as Router, Route, Routes }
  from 'react-router-dom';
import './App.css';
import Create from './Components/Create';
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import NavbarComp from './Components/NavbarComp';

function App() {
  return (
    <div className='App'>
      <NavbarComp />
      <Router>
        <Create />
        <Home />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/create' element={<Create />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div >
  );

}

export default App;

