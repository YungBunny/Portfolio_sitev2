import React from 'react';
import "animate.css/animate.min.css";
import PositionLabel from './TouchableComponent';
import PositionLabel2 from './TouchableComponent2';
import ReactCursorPosition, { INTERACTIONS } from 'react-cursor-position';
import ScrollAnimation from 'react-animate-on-scroll';
import Path11 from '../images/portfolio/Path11.svg';
import Image1 from '../images/styling_portfolio/Dreamingless-12-copy-2-compressor.jpg';
import Image2 from '../images/styling_portfolio/Dreamingless-16-copy-compressor.jpg';
import Image3 from '../images/styling_portfolio/JUNE14_2-copy-compressor.jpg';
import Image4 from '../images/styling_portfolio/lala-1_v1-compressor.jpg';
import Image5 from '../images/styling_portfolio/lala-6_v1-compressor.jpg';
import Image6 from '../images/styling_portfolio/lala-9_v1-copy-compressor.jpg';
import Image7 from '../images/styling_portfolio/madison296-compressor.jpg';
import Image8 from '../images/styling_portfolio/madison298-compressor.jpg';
import Image9 from '../images/styling_portfolio/madison310-compressor.jpg';
import Image10 from '../images/styling_portfolio/madison315-compressor.jpg';
import Image11 from '../images/styling_portfolio/madison_Escada.jpg';
import Image12 from '../images/styling_portfolio/madison_reddress.jpg';
import Image13 from '../images/styling_portfolio/Screen-Shot-2017-04-21-at-7.42.39-PM-compressor.png';
import Image14 from '../images/styling_portfolio/Screen-Shot-2018-05-15-at-10.54.12-PM-compressor.png';
import Image15 from '../images/styling_portfolio/Screen-Shot-2018-05-15-at-10.56.22-PM-copy-2-compressor.png';
import Image16 from '../images/styling_portfolio/Screen-Shot-2018-05-15-at-10.56.22-PM-copy-compressor.png';
import Image17 from '../images/styling_portfolio/Screen-Shot-2018-05-15-at-10.56.52-PM-copy-compressor.png';
import Image18 from '../images/styling_portfolio/Screen-Shot-2018-05-15-at-10.57.02-PM-copy-2-compressor.png';
import Image19 from '../images/styling_portfolio/Screen-Shot-2018-05-15-at-10.57.02-PM-copy-compressor.png';
import Image20 from '../images/styling_portfolio/Screen-Shot-2018-05-15-at-10.57.08-PM-copy-compressor.png';
import Image21 from '../images/styling_portfolio/Screen-Shot-2018-05-15-at-10.57.22-PM-compressor.png';
import Image22 from '../images/styling_portfolio/Screen-Shot-2018-05-15-at-11.11.57-PM-compressor.png';
import Image23 from '../images/styling_portfolio/Screen-Shot-2018-05-18-at-3.48.29-PM-compressor.png';
import Image24 from '../images/styling_portfolio/Screen-Shot-2018-05-18-at-4.11.11-PM-compressor.png';
import Image25 from '../images/styling_portfolio/Screen-Shot-2018-05-18-at-4.21.02-PM-compressor.png';
import Image26 from '../images/styling_portfolio/Screen-Shot-2018-05-18-at-4.21.17-PM-compressor.png';
import Image27 from '../images/styling_portfolio/Screen-Shot-2018-05-18-at-4.21.31-PM-compressor.png';
import Image28 from '../images/styling_portfolio/Screen-Shot-2018-05-18-at-4.22.34-PM-compressor.png';
import Imageui1 from '../images/uiuxportfolio/Screen Shot 2018-10-24 at 5.41.20 AM.png';
import Imageui2 from '../images/uiuxportfolio/Screen Shot 2018-10-24 at 5.47.57 AM.png';
import Imageui3 from '../images/uiuxportfolio/Screen Shot 2018-10-24 at 5.55.16 AM.png';


export default class PortfolioPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { backgroundImage: Image1, backgroundShot: Imageui1 }

    }

    testin(e) {
        let image = Image1
        if (e.position.x < 50) {
            image = Image2
        }
        if (e.position.x < 75 && e.position.x > 50) {
            image = Image3
        }
        if (e.position.x < 100 && e.position.x > 75) {
            image = Image4
        }
        if (e.position.x < 125 && e.position.x > 100) {
            image = Image5
        }
        if (e.position.x < 150 && e.position.x > 125) {
            image = Image6
        }
        if (e.position.x < 175 && e.position.x > 150) {
            image = Image7
        }
        if (e.position.x < 200 && e.position.x > 175) {
            image = Image8
        }
        if (e.position.x < 225 && e.position.x > 200) {
            image = Image9
        }
        if (e.position.x < 250 && e.position.x > 225) {
            image = Image10
        }
        if (e.position.x < 275 && e.position.x > 250) {
            image = Image11
        }
        if (e.position.x < 300 && e.position.x > 275) {
            image = Image12
        }
        if (e.position.x < 350 && e.position.x > 325) {
            image = Image13
        }
        if (e.position.x < 400 && e.position.x > 375) {
            image = Image14
        }
        if (e.position.x < 425 && e.position.x > 400) {
            image = Image15
        }
        if (e.position.x < 425 && e.position.x > 400) {
            image = Image16
        }
        if (e.position.x < 450 && e.position.x > 425) {
            image = Image17
        }
        if (e.position.x < 475 && e.position.x > 450) {
            image = Image18
        }
        if (e.position.x < 500 && e.position.x > 475) {
            image = Image19
        }
        if (e.position.x < 525 && e.position.x > 500) {
            image = Image20
        }
        if (e.position.x < 550 && e.position.x > 525) {
            image = Image21
        }
        if (e.position.x < 575 && e.position.x > 550) {
            image = Image22
        }
        if (e.position.x < 600 && e.position.x > 575) {
            image = Image23
        }
        if (e.position.x < 625 && e.position.x > 600) {
            image = Image24
        }
        if (e.position.x < 650 && e.position.x > 625) {
            image = Image25
        }
        if (e.position.x < 675 && e.position.x > 650) {
            image = Image26
        }
        if (e.position.x < 700 && e.position.x > 675) {
            image = Image27
        }
        if (e.position.x < 725 && e.position.x > 700) {
            image = Image28
        }
        console.log(image, e.position.x)
        this.setState({
            backgroundImage: image
        })
    }
    testing(e) {
        let image = Imageui1
        if (e.position.x < 100) {
            image = Imageui1
        }
        if (e.position.x < 200 && e.position.x > 100) {
            image = Imageui2
        }
        if (e.position.x < 300 && e.position.x > 200) {
            image = Imageui3
        }
        console.log(image, e.position.x)
        this.setState({
            backgroundShot: image
        })
    }
    render() {

        return (
            <div className='portfolio'>
                <div className='wardrobeStyling'>
                    <div>
                        <ScrollAnimation animateIn='agent-1'>
                            WARDROBE STYLING
                </ScrollAnimation>
                    </div>
                </div>
                <div className='wsHoverArea'>
                    <div className='wsHoverAreaGrid'>
                        <div className='hoverRow'>
                            <ReactCursorPosition onPositionChanged={this.testin.bind(this)}
                                activationInteractionMouse={INTERACTIONS.HOVER}
                                hoverDelayInMs={0}
                                hoverOffDelayInMs={0}>
                                <PositionLabel backgroundImage={this.state.backgroundImage} />
                                <div className='infront'>this should show the wardrobe styling</div>
                            </ReactCursorPosition>
                        </div>
                    </div>
                </div>
                <div className='midline'>
                    <ScrollAnimation animateIn='agent-2'>
                        <Path11 />
                    </ScrollAnimation>
                </div>
                <div className='uiuxDesign'>
                    <div>
                        <ScrollAnimation animateIn='agent-3'>
                            UI / UX & DEVELOPING
                </ScrollAnimation>
                    </div>
                </div>
                <div className='UIHoverArea'>
                    <div className='UIHoverAreaGrid'>
                        <div className='hoverRow'>
                            <ReactCursorPosition onPositionChanged={this.testing.bind(this)}
                                activationInteractionMouse={INTERACTIONS.HOVER}
                                hoverDelayInMs={0}
                                hoverOffDelayInMs={0}>
                                <div className='infront2'>UIUX / developing</div>
                                <PositionLabel2 backgroundShot={this.state.backgroundShot} />

                            </ReactCursorPosition>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
