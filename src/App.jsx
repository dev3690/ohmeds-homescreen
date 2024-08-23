// import { useState } from 'react'
// import Home from './/Components/Home'
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Home />
//     </>
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import PaymentPage from './Components/PaymentPage'; // Import the payment page component
import Home from './/Components/Home';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/" element={<Home />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
