import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header';
import Infoheader from './components/Infoheader/Infoheader';
import Categories from './components/Categories/Categories';
import Users from './components/Users/Users'
import LastProducts from './components/Recents/Recents';
import Unstocked from './components/Unstocked/Unstocked';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />

      <div className="wrapper col-12">
        <div className="col-12">
          <Infoheader/>
        </div>
        <LastProducts />
        <Users />
        <Unstocked />
        <Categories />
      </div>

        <Footer />
  </div>
  );
  }
export default App;
