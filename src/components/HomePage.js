import React from 'react';
import scrollToComponent from 'react-scroll-to-component';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import MainBlob from './MainBlob';
import MidLBlob from './MidLBlob';
import TRBlob from './TopRightBlob';
import TLBlob from './TopLeftBlob';
import LRBlob from './RightBlob';
import BLBlob from './BottomLeftBlob';
import PortfolioPage from './PortfolioPage';
import Path11 from '../images/portfolio/Path11.svg';
import Drip from '../images/about/drip.svg';
import AboutPage from './AboutPage';


export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.onMenuClick = this.onMenuClick.bind(this);
        this.state = { isTop: true }
        //this.state = { isMenu: false }

    }

    componentDidMount() {
        console.log('hey');
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 1900;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }

    // toggleisAbout = () => {
    //     this.setState({ isAbout: !this.state.isAbout })
    // }

    // toggleMenupath = () => {
    //     this.setState({ isMenu: !this.state.isMenu })
    // }

    // hasClass
    hasClass(elem, className) {
        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    }
    // toggleClass
    toggleClass(elem, className) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
        if (this.hasClass(elem, className)) {
            while (newClass.indexOf(" " + className + " ") >= 0) {
                newClass = newClass.replace(" " + className + " ", " ");
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        } else {
            elem.className += ' ' + className;
        }
    }
    onMenuClick() {
        var elem = window.document.getElementById('toggle');
        this.toggleClass(elem, 'on');
        return false;
    }

    render() {


        const { isAbout } = this.state;

        // const { isMenu } = this.state;

        return (
            <div>
                <div ref={(section) => { this.HomePage = section; }} className='homepage'>
                    <div className='hammenu'>
                        <div className='stickynav'>
                            <a onClick={this.onMenuClick} id="toggle" ><span></span></a>
                            {this.state.isTop ?
                                (<div id="menu">
                                    <ul>
                                        <li><a onClick={() => scrollToComponent(this.HomePage, { offset: 0, align: 'top', duration: 1500, ease: 'inOutQuint' })}>HOME</a></li>
                                        <li><a onClick={() => scrollToComponent(this.PortfolioPage, { offset: 0, align: 'top', duration: 1500, ease: 'inOutQuint' })} className='port'>PORTFOLIO</a></li>
                                        <li><a onClick={() => scrollToComponent(this.AboutPage, { offset: 0, align: 'top', duration: 1500, ease: 'inOutQuint' })}>ABOUT</a></li>
                                    </ul>
                                </div>) : (
                                    <div id="menu">
                                        <ul>
                                            <li><a className='about_menu' onClick={() => scrollToComponent(this.HomePage, { offset: 0, align: 'top', duration: 1500, ease: 'inOutQuint' })}>HOME</a></li>
                                            <li><a className='about_menu' onClick={() => scrollToComponent(this.PortfolioPage, { offset: 0, align: 'top', duration: 1500, ease: 'inOutQuint' })} >PORTFOLIO</a></li>
                                            <li><a className='about_menu' onClick={() => scrollToComponent(this.AboutPage, { offset: 0, align: 'top', duration: 1500, ease: 'inOutQuint' })}>ABOUT</a></li>
                                        </ul>
                                    </div>
                                )}
                        </div>
                    </div>
                    <div className='title'>
                        CHANEL FU
                    </div>
                    <div className='mainblob'><MainBlob /></div>
                    <div className='toplblob'><TLBlob /></div>
                    <div className='midlblob'><MidLBlob /></div>
                    <div className='toprblob'><TRBlob /></div>
                    <div className='lowerrblob'><LRBlob /></div>
                    <div className='bottomlblob'><BLBlob /></div>
                    <div className='desc'>RESPONSIBLE WARDROBE STYLIST TURNED UI / UX DESIGNER & SOFTWARE ENGINEER</div>
                </div>
                <div ref={(section) => { this.PortfolioPage = section; }} className='portfolio'>
                    <div className='wardrobeStyling'>
                        <ScrollAnimation animateIn='agent-1'>
                            WARDROBE STYLING
                    </ScrollAnimation>
                    </div>
                    <div className='midline'>
                        <ScrollAnimation animateIn='agent-2'>
                            <Path11 />
                        </ScrollAnimation>
                    </div>
                    <div className='uiuxDesign'>
                        <ScrollAnimation animateIn='agent-3'>
                            UI / UX & DEVELOPING
                    </ScrollAnimation>
                    </div>
                </div>
                <div ref={(section) => { this.AboutPage = section; }} className='about'>
                    <div>HEY.</div>
                    <div>Thanks for stopping by.</div>
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
                        <div>email</div>
                        <div>instajam</div>
                        <div>linkedin</div>
                        <div>github</div>
                    </div>
                </div>
            </div>

        )
    }
}


//------------------------------------------------------
// <div> 
// {isMenu ? (
//     <div className='path'>
//         <div onClick={() => scrollToComponent(this.PortfolioPage, { offset: 0, align: 'top', duration: 1500, ease: 'inOutQuint' })} className='port'>
//             <p>
//                 <Portfolio />
//             </p>
//         </div>
//         <div className='port'>
//             <About />
//         </div>

//         <MenuPath />
//     </div>
// ) : (
//         <div></div>
//     )}
// </div>
