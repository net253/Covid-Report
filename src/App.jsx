import React from 'react';
import NavBar from './components/Navbar';
import CovidThai from './components/CovidThai';
import CovidBarChart from './components/CovidBarChart';
import Footer from './components/Footer'
import "./components/com.css";

import 'mdb-react-ui-kit/dist/css/mdb.min.css'
function App() {

  return (
    <>
      <NavBar />
      <CovidThai />
      <CovidBarChart />
      <Footer />
    </>
  )
}

export default App
