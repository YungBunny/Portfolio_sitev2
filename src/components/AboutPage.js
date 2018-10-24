import React from 'react';
import Drip from '../images/about/drip.svg';
import ScrollAnimation from 'react-animate-on-scroll';


export default class AboutPage extends React.Component {

    render() {
        return (
            <div className='about'>
                <div>
                    <ScrollAnimation animateIn='load-in'>
                        HEY.
                        </ScrollAnimation>
                </div>
                <div>
                    <ScrollAnimation animateIn='load-in'>
                        Thanks for stopping by.
                        </ScrollAnimation>
                </div>
                <div className='drip'><Drip /></div>
                <div className="aboutText">
                    <div className='textGrid'>
                        <div>The name’s Chanel Fu. California born, Berlin based. I have a strong passion for positive change through tech and design. Always looking for people to learn, grow, & create with.</div>
                        <div>After graduating with my Bachelor’s in Business with a focus in Marketing, I became a freelance Wardrobe Stylist with a focus in ethical and sustainable fashion.</div>
                        <div>Fast forward 3 years and I found myself sliding into my next career as a Software Engineer having built my programming foundation in C while attending 42 Silicon Valley.</div>
                    </div>
                </div>
                <div>I wanted to develop a more powerful skill that could create more change, so here I am.</div>
                <div>SHALL WE?</div>
                <div className='connect'>
                    <div><a href='mailto:fumanity@gmail.com'>email</a></div>
                    <div><a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/fumanity/?hl=en'>instajam</a></div>
                    <div><a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/chanel-fu-fumanity/'>linkedin</a></div>
                    <div><a target="_blank" rel="noopener noreferrer" href='https://github.com/YungBunny'>github</a></div>
                </div>
            </div>
        )
    }
}