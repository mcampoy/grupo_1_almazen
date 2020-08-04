import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header';
import Info from './components/Info/Info'
import Categories from './components/Categories/Categories'
import LastProducts from './components/Recents/Recents';
import Unstocked from './components/Unstocked/Unstocked';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />

      <div className="wrapper col-12">
        <Info/>
        <LastProducts />
        <Unstocked />
        <Categories />
      </div>

        <Footer />
  </div>
  );
  }
export default App;
