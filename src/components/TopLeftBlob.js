import React from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import Path6a from '../images/blobtopleft/Path_6.svg';
import Path5a from '../images/blobtopleft/Path_5.svg';
import Path4a from '../images/blobtopleft/Path_4.svg';
import Path3a from '../images/blobtopleft/Path_3.svg';
import Path2a from '../images/blobtopleft/Path_2.svg';
import Path1a from '../images/blobtopleft/Path_1.svg';


export default class TopLeftBlob extends React.Component {

    render() {
        const style = {
            infoLayerStyle: {
                position: 'relative',
                marginTop: '-60px'
            }
        }
        return (
            <div>
                <div className='homepage_blacka'>
                    <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                        xFactor: 0.08,
                        yFactor: 0.08,
                        springSettings: {
                            stiffness: 200,
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
                            stiffness: 200,
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
                            stiffness: 200,
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
                            stiffness: 200,
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
                            stiffness: 200,
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
                            stiffness: 200,
                            damping: 70
                        }
                    }}>
                        <Path1a />
                    </ParallaxMousemove.Layer>
                </div>
            </div>
        )
    }
}