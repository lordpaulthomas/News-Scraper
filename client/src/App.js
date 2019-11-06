import React from 'react';
import Articles from './pages/Articles';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Nav/>
      <Header/>
      <Articles/>
      <Footer/>      
    </div>
  );
}

export default App;
