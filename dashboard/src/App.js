import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header';
import Info from './components/Info/Info';
import Categories from './components/Categories/Categories';
import Users from './components/Users/Users'
import LastProducts from './components/Recents/Recents';
import Unstocked from './components/unstocked/Unstocked';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />

      <div className="wrapper col-12">
        <div className="col-12">
          <Info/>
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
