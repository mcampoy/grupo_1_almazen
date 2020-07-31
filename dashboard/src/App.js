import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header';
// import Footer from './components/Footer';
import Categories from './components/Categories/Categories'
import LastProducts from './components/LastProducts';

function App() {
  return (
    <div className="App">

      <Header />
      <LastProducts />
      <Categories />
      {/* <Footer /> */}

    </div>
  );
}

export default App;
