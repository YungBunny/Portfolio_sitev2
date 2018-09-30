import React from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import scrollToComponent from 'react-scroll-to-component';
import "animate.css/animate.min.css";
import MainBlob from './MainBlob';
import TopLeftBlob from './TopLeftBlob';
import BottomLeftBlob from './BottomLeftBlob';
import RightBlob from './RightBlob';
import PortfolioPage from './PortfolioPage';
import MenuPath from '../images/menupath.svg';
import Portfolio from '../images/Portfolio.svg';
import About from '../images/About.svg';
import ChanelFu from '../images/chanelfu.svg';
import HomepageDesc from '../images/homepageDesc.svg';
import Backgroundgrid from '../images/background_grid.svg'
import Verticalgrid from '../images/vertical_grid.svg'
import Horizontalgrid from '../images/horizontal_grid.svg'


console.log('hey');

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isMenu: false }
    }

    toggleMenupath = () => {
        this.setState({ isMenu: !this.state.isMenu })
    }

    render() {
        const style = {
            infoLayerStyle: {
                position: 'relative',
                marginTop: '-60px'
            }
        }
        const { isMenu } = this.state;

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
                            <BottomLeftBlob />
                            <TopLeftBlob />
                            <RightBlob />
                        </ParallaxMousemove>
                    </div>
                    <div>
                        {isMenu ? (
                            <div className='path'>
                                <div onClick={() => scrollToComponent(this.PortfolioPage, { offset: 0, align: 'top', duration: 1500, ease: 'inOutQuint' })} className='port'>
                                    <p>
                                        <Portfolio />
                                    </p>
                                </div>
                                <div className='port'>
                                    <About />
                                </div>

                                <MenuPath />
                            </div>
                        ) : (
                                <div></div>
                            )}
                    </div>
                    <div>
                        <HomepageDesc />
                    </div>
                    <div></div>
                </div>

                <div ref={(section) => { this.PortfolioPage = section; }}><PortfolioPage /></div>
                <div></div>
            </div>
        )
    }
}
