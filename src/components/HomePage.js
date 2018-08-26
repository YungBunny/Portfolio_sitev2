import React from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import Path9 from '../images/mainblob/Path_9.svg';
import Path8 from '../images/mainblob/Path_8.svg';
import Path7 from '../images/mainblob/Path_7.svg';
import Path6 from '../images/mainblob/Path_6.svg';
import Path5 from '../images/mainblob/Path_5.svg';
import Path4 from '../images/mainblob/Path_4.svg';
import Path3 from '../images/mainblob/Path_3.svg';
import Path2 from '../images/mainblob/Path_2.svg';
import Path1 from '../images/mainblob/Path_1.svg';
import Path6b from '../images/blobbottomleft/Path_6.svg';
import Path5b from '../images/blobbottomleft/Path_5.svg';
import Path4b from '../images/blobbottomleft/Path_4.svg';
import Path3b from '../images/blobbottomleft/Path_3.svg';
import Path2b from '../images/blobbottomleft/Path_2.svg';
import Path1b from '../images/blobbottomleft/Path_1.svg';
import Path6a from '../images/blobtopleft/Path_6.svg';
import Path5a from '../images/blobtopleft/Path_5.svg';
import Path4a from '../images/blobtopleft/Path_4.svg';
import Path3a from '../images/blobtopleft/Path_3.svg';
import Path2a from '../images/blobtopleft/Path_2.svg';
import Path1a from '../images/blobtopleft/Path_1.svg';
import Path5c from '../images/blobright/Path_5.svg';
import Path4c from '../images/blobright/Path_4.svg';
import Path3c from '../images/blobright/Path_3.svg';
import Path2c from '../images/blobright/Path_2.svg';
import Path1c from '../images/blobright/Path_1.svg';
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
                    <ParallaxMousemove >
                        <div className='homepage_electric'>
                            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: 0.11,
                                yFactor: 0.11,
                                springSettings: {
                                    stiffness: 100,
                                    damping: 30
                                }
                            }}>
                                <Path9 />
                            </ParallaxMousemove.Layer>
                            <div className='homepage_black'>
                                <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                    xFactor: 0.1,
                                    yFactor: 0.1,
                                    springSettings: {
                                        stiffness: 100,
                                        damping: 35
                                    }
                                }}>
                                    <Path8 />
                                </ParallaxMousemove.Layer>
                                <div className='homepage_crimson'>
                                    <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                        xFactor: 0.09,
                                        yFactor: 0.09,
                                        springSettings: {
                                            stiffness: 100,
                                            damping: 40
                                        }
                                    }}>
                                        <Path7 />
                                    </ParallaxMousemove.Layer>
                                    <div className='homepage_mauve'>
                                        <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                            xFactor: 0.08,
                                            yFactor: 0.08,
                                            springSettings: {
                                                stiffness: 100,
                                                damping: 45
                                            }
                                        }}>
                                            <Path6 />
                                        </ParallaxMousemove.Layer>
                                        <div className='homepage_forest'>
                                            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                                xFactor: 0.07,
                                                yFactor: 0.07,
                                                springSettings: {
                                                    stiffness: 100,
                                                    damping: 50
                                                }
                                            }}>
                                                <Path5 />
                                            </ParallaxMousemove.Layer>
                                            <div className='homepage_spicy'>
                                                <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                                    xFactor: 0.06,
                                                    yFactor: 0.06,
                                                    springSettings: {
                                                        stiffness: 100,
                                                        damping: 55
                                                    }
                                                }}>
                                                    <Path4 />
                                                </ParallaxMousemove.Layer>
                                                <div className='homepage_mud'>
                                                    <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                                        xFactor: 0.05,
                                                        yFactor: 0.05,
                                                        springSettings: {
                                                            stiffness: 100,
                                                            damping: 60
                                                        }
                                                    }}>
                                                        <Path3 />
                                                    </ParallaxMousemove.Layer>
                                                    <div className='homepage_mint'>
                                                        <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                                            xFactor: 0.04,
                                                            yFactor: 0.04,
                                                            springSettings: {
                                                                stiffness: 100,
                                                                damping: 65
                                                            }
                                                        }}>
                                                            <Path2 />
                                                        </ParallaxMousemove.Layer>
                                                        <div className='homepage_eggshell'>
                                                            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                                                xFactor: 0.03,
                                                                yFactor: 0.03,
                                                                springSettings: {
                                                                    stiffness: 100,
                                                                    damping: 70
                                                                }
                                                            }}>
                                                                <Path1 />
                                                            </ParallaxMousemove.Layer>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ParallaxMousemove>
                    <div>
                        <div className='homepage_peachb'>
                            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: 0.08,
                                yFactor: 0.08,
                                springSettings: {
                                    stiffness: 100,
                                    damping: 45
                                }
                            }}>
                                <Path6b />
                            </ParallaxMousemove.Layer>
                        </div>
                        <div className='homepage_eggshellb'>
                            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: 0.07,
                                yFactor: 0.07,
                                springSettings: {
                                    stiffness: 100,
                                    damping: 50
                                }
                            }}>
                                <Path5b />
                            </ParallaxMousemove.Layer>
                        </div>
                        <div className='homepage_crimsonb'>
                            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: 0.06,
                                yFactor: 0.06,
                                springSettings: {
                                    stiffness: 100,
                                    damping: 55
                                }
                            }}>
                                <Path4b />
                            </ParallaxMousemove.Layer>
                        </div>
                        <div className='homepage_mintb'>
                            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: 0.05,
                                yFactor: 0.05,
                                springSettings: {
                                    stiffness: 100,
                                    damping: 60
                                }
                            }}>
                                <Path3b />
                            </ParallaxMousemove.Layer>
                        </div>
                        <div className='homepage_mustardb'>
                            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: 0.04,
                                yFactor: 0.04,
                                springSettings: {
                                    stiffness: 100,
                                    damping: 65
                                }
                            }}>
                                <Path2b />
                            </ParallaxMousemove.Layer>
                        </div>
                        <div className='homepage_electricb'>
                            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: 0.03,
                                yFactor: 0.03,
                                springSettings: {
                                    stiffness: 100,
                                    damping: 70
                                }
                            }}>
                                <Path1b />
                            </ParallaxMousemove.Layer>
                        </div>
                        <div>
                            <div className='homepage_blacka'>
                                <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                    xFactor: 0.08,
                                    yFactor: 0.08,
                                    springSettings: {
                                        stiffness: 100,
                                        damping: 45
                                    }
                                }}>
                                    <Path6a />
                                </ParallaxMousemove.Layer>
                            </div>
                            <div className='homepage_olivea'>
                                <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                    xFactor: 0.07,
                                    yFactor: 0.07,
                                    springSettings: {
                                        stiffness: 100,
                                        damping: 50
                                    }
                                }}>
                                    <Path5a />
                                </ParallaxMousemove.Layer>
                            </div>
                            <div className='homepage_spicya'>
                                <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                    xFactor: 0.06,
                                    yFactor: 0.06,
                                    springSettings: {
                                        stiffness: 100,
                                        damping: 55
                                    }
                                }}>
                                    <Path4a />
                                </ParallaxMousemove.Layer>
                            </div>
                            <div className='homepage_minta'>
                                <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                    xFactor: 0.05,
                                    yFactor: 0.05,
                                    springSettings: {
                                        stiffness: 100,
                                        damping: 60
                                    }
                                }}>
                                    <Path3a />
                                </ParallaxMousemove.Layer>
                            </div>
                            <div className='homepage_mustarda'>
                                <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                    xFactor: 0.04,
                                    yFactor: 0.04,
                                    springSettings: {
                                        stiffness: 100,
                                        damping: 65
                                    }
                                }}>
                                    <Path2a />
                                </ParallaxMousemove.Layer>
                            </div>
                            <div className='homepage_peacha'>
                                <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                    xFactor: 0.03,
                                    yFactor: 0.03,
                                    springSettings: {
                                        stiffness: 100,
                                        damping: 70
                                    }
                                }}>
                                    <Path1a />
                                </ParallaxMousemove.Layer>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='homepage_blacka'>
                            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: 0.08,
                                yFactor: 0.08,
                                springSettings: {
                                    stiffness: 100,
                                    damping: 45
                                }
                            }}>
                                <Path6a />
                            </ParallaxMousemove.Layer>
                        </div>
                        <div className='homepage_olivea'>
                            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: 0.07,
                                yFactor: 0.07,
                                springSettings: {
                                    stiffness: 100,
                                    damping: 50
                                }
                            }}>
                                <Path5a />
                            </ParallaxMousemove.Layer>
                        </div>
                        <div className='homepage_spicya'>
                            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: 0.06,
                                yFactor: 0.06,
                                springSettings: {
                                    stiffness: 100,
                                    damping: 55
                                }
                            }}>
                                <Path4a />
                            </ParallaxMousemove.Layer>
                        </div>
                        <div className='homepage_minta'>
                            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: 0.05,
                                yFactor: 0.05,
                                springSettings: {
                                    stiffness: 100,
                                    damping: 60
                                }
                            }}>
                                <Path3a />
                            </ParallaxMousemove.Layer>
                        </div>
                        <div className='homepage_mustarda'>
                            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: 0.04,
                                yFactor: 0.04,
                                springSettings: {
                                    stiffness: 100,
                                    damping: 65
                                }
                            }}>
                                <Path2a />
                            </ParallaxMousemove.Layer>
                        </div>
                        <div className='homepage_peacha'>
                            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: 0.03,
                                yFactor: 0.03,
                                springSettings: {
                                    stiffness: 100,
                                    damping: 70
                                }
                            }}>
                                <Path1a />
                            </ParallaxMousemove.Layer>
                        </div>
                    </div>

                    <div>
                        <div className='homepage_forestc'>
                            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: 0.07,
                                yFactor: 0.07,
                                springSettings: {
                                    stiffness: 100,
                                    damping: 50
                                }
                            }}>
                                <Path5c />
                            </ParallaxMousemove.Layer>
                        </div>
                        <div className='homepage_eggshellc'>
                            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: 0.06,
                                yFactor: 0.06,
                                springSettings: {
                                    stiffness: 100,
                                    damping: 55
                                }
                            }}>
                                <Path4c />
                            </ParallaxMousemove.Layer>
                        </div>
                        <div className='homepage_spicyc'>
                            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: 0.05,
                                yFactor: 0.05,
                                springSettings: {
                                    stiffness: 100,
                                    damping: 60
                                }
                            }}>
                                <Path3c />
                            </ParallaxMousemove.Layer>
                        </div>
                        <div className='homepage_mustardc'>
                            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: 0.04,
                                yFactor: 0.04,
                                springSettings: {
                                    stiffness: 100,
                                    damping: 65
                                }
                            }}>
                                <Path2c />
                            </ParallaxMousemove.Layer>
                        </div>
                        <div className='homepage_eggshellc1'>
                            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                                xFactor: 0.03,
                                yFactor: 0.03,
                                springSettings: {
                                    stiffness: 100,
                                    damping: 70
                                }
                            }}>
                                <Path1c />
                            </ParallaxMousemove.Layer>
                        </div>
                    </div>
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
