import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

const Home = () => {
  return (
    <div className="App">
      <section className="First-section">
        <Header />
      </section>
      <section className='Second-section bg-purple-300'>
        <p className="text-black">logos of the services</p>
      </section>
      <section className='Third-section bg-black'>
        <p className='text-yellow-400 '>Carousel</p>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
