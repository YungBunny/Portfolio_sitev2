import React from 'react';
import Parallax from 'parallax-js';
import Path5bl from '../images/blblob/blblob5.svg';
import Path4bl from '../images/blblob/blblob4.svg';
import Path3bl from '../images/blblob/blblob3.svg';
import Path2bl from '../images/blblob/blblob2.svg';
import Path1bl from '../images/blblob/blblob1.svg';


export default class BLBlob extends React.Component {
    componentDidMount() {
        var scenebl = document.getElementById('scenebl');
        var parallaxInstance = new Parallax(scenebl, {
            relativeInput: true
        });
        var scene1bl = document.getElementById('scene1bl');
        var parallaxInstance = new Parallax(scene1bl, {
            relativeInput: true
        });
        var scene2bl = document.getElementById('scene2bl');
        var parallaxInstance = new Parallax(scene2bl, {
            relativeInput: true
        });
        var scene3bl = document.getElementById('scene3bl');
        var parallaxInstance = new Parallax(scene3bl, {
            relativeInput: true
        });
        var scene4bl = document.getElementById('scene4bl');
        var parallaxInstance = new Parallax(scene4bl, {
            relativeInput: true
        });
    }
    render() {
        return (
            <div className='bottom-left-blob__layers'>
                <div id='scenebl' className='bottom-left-blob__layer'>
                    <Path5bl data-depth="0.5" className='bottom-left-blob__svg'/>
                </div>
                <div id='scene1bl' className='bottom-left-blob__layer'>
                    <Path4bl data-depth="0.45"  className='bottom-left-blob__svg'/>
                </div>
                <div id='scene2bl' className='bottom-left-blob__layer'>
                    <Path3bl data-depth="0.4"  className='bottom-left-blob__svg'/>
                </div>
                <div id='scene3bl' className='bottom-left-blob__layer'>
                    <Path2bl data-depth="0.35"  className='bottom-left-blob__svg'/>
                </div>
                <div id='scene4bl' className='bottom-left-blob__layer'>
                    <Path1bl data-depth="0.3"  className='bottom-left-blob__svg'/>
                </div>
            </div>
        )
    }
}