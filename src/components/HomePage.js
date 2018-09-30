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

    // constructor(props) {
    //     super(props);
    //     this.state = { isMenu: false }
    // }

    // toggleMenupath = () => {
    //     this.setState({ isMenu: !this.state.isMenu })
    // }

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

                    <div>
                        <HomepageDesc />
                    </div>
                    <div></div>

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