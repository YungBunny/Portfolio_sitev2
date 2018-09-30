import React from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import Path5c from '../images/blobright/Path_5.svg';
import Path4c from '../images/blobright/Path_4.svg';
import Path3c from '../images/blobright/Path_3.svg';
import Path2c from '../images/blobright/Path_2.svg';
import Path1c from '../images/blobright/Path_1.svg';

export default class RightBlob extends React.Component {

    render() {
        const style = {
            infoLayerStyle: {
                position: 'relative'
            }
        }
        return (
            <div className='right_blob'>
                <div className='homepage_forestc'>
                    <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                        xFactor: 0.07,
                        yFactor: 0.07,
                        springSettings: {
                            stiffness: 200,
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
                            stiffness: 200,
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
                            stiffness: 200,
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
                            stiffness: 200,
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
                            stiffness: 200,
                            damping: 70
                        }
                    }}>
                        <Path1c />
                    </ParallaxMousemove.Layer>
                </div>
            </div>
        )
    }
}