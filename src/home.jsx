import React from 'react';
import HomeCarousel from './carousel';




export default function Home() {
  return (
    <main>
       <section className="hero-image">
        <section className="hero-text">
          <h2 id="heroText">Sprouts</h2>
        </section>
      </section>

      <section className='top-sellers'>
      <h1>Let's Get Growing!</h1>
        <HomeCarousel />
      </section>
     
    </main>
  );
}