import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header';
// import Footer from './components/Footer';
import Categories from './components/Categories/Categories'
import LastProducts from './components/LastProducts';
import Unstocked from './components/unstocked/Unstocked';

function App() {
  return (
    <div className="App">

      <Header />
      <LastProducts />
      <Categories />
      {/* <Footer /> */}
      <Unstocked />
  </div>
  );
  }
export default App;
