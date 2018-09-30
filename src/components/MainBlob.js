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
import TopLeftBlob from './TopLeftBlob';
import BottomLeftBlob from './BottomLeftBlob';
import RightBlob from './RightBlob';
import FUMANITY from '../images/FUMANITY.svg';

export default class MainBlob extends React.Component {

    render() {
        const style = {
            infoLayerStyle: {
                position: 'relative',
                marginTop: '-60px'
            }
        }
        return (
            <div className='main_blob_2'>
                <div className='homepage_electric'>
                    <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                        xFactor: 0.11,
                        yFactor: 0.11,
                        springSettings: {
                            stiffness: 200,
                            damping: 30
                        }
                    }}>
                        <Path9 />
                    </ParallaxMousemove.Layer>
                </div>
                <div className='homepage_black'>
                    <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                        xFactor: 0.1,
                        yFactor: 0.1,
                        springSettings: {
                            stiffness: 200,
                            damping: 35
                        }
                    }}>
                        <Path8 />
                    </ParallaxMousemove.Layer>
                </div>
                <div className='homepage_crimson'>
                    <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                        xFactor: 0.09,
                        yFactor: 0.09,
                        springSettings: {
                            stiffness: 200,
                            damping: 40
                        }
                    }}>
                        <Path7 />
                    </ParallaxMousemove.Layer>
                </div>
                <div className='homepage_mauve'>
                    <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                        xFactor: 0.08,
                        yFactor: 0.08,
                        springSettings: {
                            stiffness: 200,
                            damping: 45
                        }
                    }}>
                        <Path6 />
                    </ParallaxMousemove.Layer>
                </div>
                <div className='homepage_forest'>
                    <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                        xFactor: 0.07,
                        yFactor: 0.07,
                        springSettings: {
                            stiffness: 200,
                            damping: 50
                        }
                    }}>
                        <Path5 />
                    </ParallaxMousemove.Layer>
                </div>
                <div className='homepage_spicy'>
                    <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                        xFactor: 0.06,
                        yFactor: 0.06,
                        springSettings: {
                            stiffness: 200,
                            damping: 55
                        }
                    }}>
                        <Path4 />
                    </ParallaxMousemove.Layer>
                </div>
                <div className='homepage_mud'>
                    <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                        xFactor: 0.05,
                        yFactor: 0.05,
                        springSettings: {
                            stiffness: 200,
                            damping: 60
                        }
                    }}>
                        <Path3 />
                    </ParallaxMousemove.Layer>
                </div>
                <div className='homepage_mint'>
                    <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                        xFactor: 0.04,
                        yFactor: 0.04,
                        springSettings: {
                            stiffness: 200,
                            damping: 65
                        }
                    }}>
                        <Path2 />
                    </ParallaxMousemove.Layer>
                </div>
                <div className='homepage_eggshell'>
                    <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                        xFactor: 0.03,
                        yFactor: 0.03,
                        springSettings: {
                            stiffness: 200,
                            damping: 70
                        }
                    }}>
                        <Path1 />
                    </ParallaxMousemove.Layer>
                </div>
                <div>
                    <TopLeftBlob />
                </div>
                <div>
                    <BottomLeftBlob />
                </div>
                <div>
                    <RightBlob />
                </div>
            </div>
        )
    }
}                  
