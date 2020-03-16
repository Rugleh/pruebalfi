import React from 'react';
import './App.css';
import Menu from './components/menu.js'
import Hero from './components/hero.js'
import Value from './components/value.js'
import News from './components/news.js'
import Services from './components/services.js'
import Clients from './components/clients.js'
import Footer from './components/footer.js'



function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Hero></Hero>
      <Value></Value>
      <News></News>
      <Services></Services>
      <Clients></Clients>
      <Footer></Footer>
    </div>
  );
}

export default App;
