import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header';
import Unstocked from './components/unstocked/Unstocked';
import Info from './components/Info/Info'
import Categories from './components/Categories/Categories'
// import LastProducts from './components/LastProducts';
import Unstocked from './components/Unstocked/Unstocked';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Info/>
      {/* <LastProducts /> */}
      <Categories />
      <Unstocked />
      <Footer />
  </div>
  );
  }
export default App;
