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
            <div className='blblob'>
                <div id='scenebl'>
                    <Path5bl data-depth="0.25" />
                </div>
                <div id='scene1bl'>
                    <Path4bl data-depth="0.2" />
                </div>
                <div id='scene2bl'>
                    <Path3bl data-depth="0.15" />
                </div>
                <div id='scene3bl'>
                    <Path2bl data-depth="0.1" />
                </div>
                <div id='scene4bl'>
                    <Path1bl data-depth="0.05" />
                </div>
            </div>
        )
    }
}