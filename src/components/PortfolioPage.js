import React from 'react';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const PortfolioPage = () => (

  <div>

    <div className='portpage'>
      <ScrollAnimation animateIn='agent-1'>
        <h1>
          Hey
        </h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn='agent-2'>
        <h1>
          -----------------------
      </h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn='agent-3'>
        <h1>
          Thanks for
        </h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn='agent-3'>
        <h1>
         stopping by
        </h1>
      </ScrollAnimation>
      
    <div>The name's Chanel. I'm a responsible Wardrobe Stylist turned Software Engineer. </div>
    <div></div>
    </div>
  </div>

);

export default PortfolioPage;