import React from 'react';
import './Hero.css';

// imgs
import github from "./../assets/GitHub.png"

function Hero() 
{
  return (
    <section className="hero">
      <h1>Ceau ;)</h1>
      <h3>Eu sunt Tech.Bin!</h3>
      <p>Ceau! Acesta este portofoliul meu. Eusunt un Fullstack developer. Imi plac proiectele de backend, de frontend cat si cele IOT.</p>
      <p>
        Intotdeauna, ( poate doar pt mine,) e mai interesant backendul decat frontendul sau IOT-ul mai mult decat backendul.
      </p>
      <a href="https://github.com/tech-dot-bin" target="_blank" rel="noopener noreferrer"><img src={github} alt="Github Image" />Github</a>
    </section>
  );
}

export default Hero;