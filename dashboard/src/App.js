import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header';
// import Footer from './components/Footer';
import Categories from './components/Categories/Categories'

function App() {
  return (
    <div className="App">

      <Header />

      <Categories />
      {/* <Footer /> */}

    </div>
  );
}

export default App;
