import React from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import MainBlob from './MainBlob';
import TopLeftBlob from './TopLeftBlob';
import BottomLeftBlob from './BottomLeftBlob';
import RightBlob from './RightBlob';
import MenuPath from '../images/menupath.svg';
import Portfolio from '../images/Portfolio.svg';
import About from '../images/About.svg';

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
                <div onClick={this.toggleMenupath} className='homepage'>
                <ParallaxMousemove>
                    <MainBlob />
                    <BottomLeftBlob />
                    <TopLeftBlob />
                    <RightBlob />
                </ParallaxMousemove>
                    <div>
                        {isMenu ? (
                            <div className='path'>
                                <div className='port'>
                                    <p>
                                        <Portfolio />
                                    </p>
                                    <div>
                                        <About />
                                    </div>
                                </div>
                                <MenuPath />
                            </div>
                                ) : (
                                <div></div>
                            )}
                    </div>
                </div>
            </div>
        )
    }
}
