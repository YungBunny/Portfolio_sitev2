import React from 'react';
import ReactCursorPosition, { INTERACTIONS } from 'react-cursor-position';
import PositionLabel from './TouchableComponent';
import scrollToComponent from 'react-scroll-to-component';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import MainBlob from './MainBlob';
import MidLBlob from './MidLBlob';
import TRBlob from './TopRightBlob';
import TLBlob from './TopLeftBlob';
import LRBlob from './RightBlob';
import BLBlob from './BottomLeftBlob';
import Path11 from '../images/portfolio/Path11.svg';
import Drip from '../images/about/drip.svg';
import Image1 from '../images/styling_portfolio/Dreamingless-12-copy-2-compressor.jpg';
import Image2 from '../images/styling_portfolio/Dreamingless-16-copy-compressor.jpg';
import Image3 from '../images/styling_portfolio/JUNE14_2-copy-compressor.jpg';
import Image4 from '../images/styling_portfolio/lala-1_v1-compressor.jpg';
import Image5 from '../images/styling_portfolio/lala-6_v1-compressor.jpg';


export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.onMenuClick = this.onMenuClick.bind(this);
        this.state = { isTop: true, backgroundImage: Image1 }
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

    testin(e) {
        let image = Image1
        if (e.position.x < 100) {
            image = Image2
        }
        if (e.position.x < 200 && e.position.x > 100) {
            image = Image3
        }
        if (e.position.x < 300 && e.position.x > 200) {
            image = Image4
        }
        console.log(image, e.position.x)
        this.setState({
            backgroundImage: image
        })
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
                            <ReactCursorPosition onPositionChanged={this.testin.bind(this)}
                                activationInteractionMouse={INTERACTIONS.HOVER}
                                hoverDelayInMs={0}
                                hoverOffDelayInMs={0}>  
                                WARDROBE STYLING
                                <PositionLabel backgroundImage={this.state.backgroundImage}/>
                            </ReactCursorPosition>
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
            </div>
        )
    }
}


//------------------------------------------------------ reference to onclick instance
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
