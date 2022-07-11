import React from 'react';
import './estilo.css';
import Home from './screen/Home.js';
import Footer from './screen/Footer.js';
import NavigationBar from './screen/NavigationBar';



function App() {
 return (
  <div className="App">
    <body>
        <header>
          <NavigationBar/>
        </header>
        <section className='main'>
          <Home/>
        </section>
        <footer>
          <Footer/>
        </footer>
      </body>
  </div>
 ) 
}

export default App;
