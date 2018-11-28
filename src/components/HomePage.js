import React from 'react';
import scrollToComponent from 'react-scroll-to-component';
import "animate.css/animate.min.css";
import MainBlob from './MainBlob';
import MidLBlob from './MidLBlob';
import TRBlob from './TopRightBlob';
import TLBlob from './TopLeftBlob';
import LRBlob from './RightBlob';
import BLBlob from './BottomLeftBlob';
import AboutPage from './AboutPage';
import PortfolioPage from './PortfolioPage';


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
                    <div className='menu-icon'>
                        <div className='menu-items'>
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
                    <div className='main-blob'><MainBlob /></div>
                    <div className='top-left-blob'><TLBlob /></div>
                    <div className='middle-left-blob'><MidLBlob /></div>
                    <div className='top-right-blob'><TRBlob /></div>
                    <div className='lower-right-blob'><LRBlob /></div>
                    <div className='bottom-left-blob'><BLBlob /></div>
                    <div className='description'>RESPONSIBLE WARDROBE STYLIST TURNED UI / UX DESIGNER & SOFTWARE ENGINEER</div>
                </div>
                <div ref={(section) => { this.PortfolioPage = section; }}>
                    <PortfolioPage />
                </div>
                <div ref={(section) => { this.AboutPage = section; }}>
                    <AboutPage />
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
