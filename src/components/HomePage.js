import React from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import scrollToComponent from 'react-scroll-to-component';
import "animate.css/animate.min.css";
import MainBlob from './MainBlob';
import PortfolioPage from './PortfolioPage';
import ChanelFu from '../images/chanelfu.svg';
import HomepageDesc from '../images/homepageDesc.svg';


console.log('hey');

export default class HomePage extends React.Component {

     constructor(props) {
        super(props);
    //     this.state = { isMenu: false }
     }

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
        if (hasClass(elem, className)) {
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
        const style = {
            infoLayerStyle: {
                position: 'relative',
                marginTop: '-60px'
            }
        }
        // const { isMenu } = this.state;

        return (
            <div>
                <div className='homepage'>
                    <div>
                        <ChanelFu />
                    </div>
                    <div className='main_blob'>
                        <ParallaxMousemove>
                            <div onClick={this.toggleMenupath}>
                                <MainBlob />
                            </div>
                        </ParallaxMousemove>
                    </div>

                    <div className='homepagedesc'>
                        <HomepageDesc />
                    </div>
                    <div></div>
                    <div onClick={this.onMenuClick.bind(this)} id="toggle">
                        <a onClick={this.onMenuClick.bind(this)} id="toggle"><span></span></a>

                        <div id="menu">
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='portpage' ref={(section) => { this.PortfolioPage = section; }}>
                        <div>
                            <PortfolioPage />
                        </div>
                    </div>
                </div>


                <div></div>
            </div>
        )
    }
}

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