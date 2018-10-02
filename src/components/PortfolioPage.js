import React from 'react';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import WardrobeStyling from '../images/WARDROBESTYLING.svg';
import Path11 from '../images/Path11.svg';
import Uiux from '../images/UIUX.svg';

const PortfolioPage = () => (
  <div className='portfolio'>
    <ScrollAnimation animateIn='agent-1'>
      <WardrobeStyling />
    </ScrollAnimation>
    <ScrollAnimation animateIn='agent-2'>
      <Path11 />
    </ScrollAnimation>
    <ScrollAnimation animateIn='agent-3'>
      <Uiux />
    </ScrollAnimation>
    <div></div>
    <div></div>
  </div>
)

export default PortfolioPage;