import React from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import Path6b from '../images/blobbottomleft/Path_6.svg';
import Path5b from '../images/blobbottomleft/Path_5.svg';
import Path4b from '../images/blobbottomleft/Path_4.svg';
import Path3b from '../images/blobbottomleft/Path_3.svg';
import Path2b from '../images/blobbottomleft/Path_2.svg';
import Path1b from '../images/blobbottomleft/Path_1.svg';

export default class BottomLeftBlob extends React.Component {

    render() {
        const style = {
            infoLayerStyle: {
                position: 'relative',
                marginTop: '-60px'
            }
        }
        return (
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
            </div>
        )
    }
}