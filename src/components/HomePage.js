import React from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import scrollToComponent from 'react-scroll-to-component';
import "animate.css/animate.min.css";
import MainBlob from './MainBlob';
import PortfolioPage from './PortfolioPage';
import ChanelFu from '../images/chanelfu.svg';
import HomepageDesc from '../images/homepageDesc.svg';
import StickyNavigation from './StickyNav';


console.log('hey');

export default class HomePage extends React.Component {

     constructor(props) {
        super(props);
        console.log('constructor');
        this.onMenuClick = this.onMenuClick.bind(this);
        //this.state = { isMenu: false }
     }

    // toggleMenupath = () => {
    //     this.setState({ isMenu: !this.state.isMenu })
    // }

    // hasClass
    hasClass(elem, className) {
        console.log('has class');
        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    }
    // toggleClass
    toggleClass(elem, className) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
        console.log('toggleClass');
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
                    <div><StickyNavigation /></div>
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