import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import MainPage from './components/main_page';
import FAB from './components/fab';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainPage />
        <FAB />
        <Footer />
      </div>
    );
  }
}

export default App;
