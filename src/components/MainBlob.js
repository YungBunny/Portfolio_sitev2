import React from 'react';
import Parallax from 'parallax-js';
import Path9 from '../images/mainblob/Path_9bigger.svg';
import Path8 from '../images/mainblob/Path_8bigger.svg';
import Path7 from '../images/mainblob/Path_7bigger.svg';
import Path6 from '../images/mainblob/Path_6bigger.svg';
import Path5 from '../images/mainblob/Path_5bigger.svg';
import Path4 from '../images/mainblob/Path_4bigger.svg';
import Path3 from '../images/mainblob/Path_3bigger.svg';
import Path2 from '../images/mainblob/Path_2bigger.svg';
import Path1 from '../images/mainblob/Path_1bigger.svg';

export default class MainBlob extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('blob');
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene, {
            relativeInput: true
        });
        var scene1 = document.getElementById('scene1');
        var parallaxInstance = new Parallax(scene1, {
            relativeInput: true
        });
        var scene2 = document.getElementById('scene2');
        var parallaxInstance = new Parallax(scene2, {
            relativeInput: true
        });
        var scene3 = document.getElementById('scene3');
        var parallaxInstance = new Parallax(scene3, {
            relativeInput: true
        });
        var scene4 = document.getElementById('scene4');
        var parallaxInstance = new Parallax(scene4, {
            relativeInput: true
        });
        var scene5 = document.getElementById('scene5');
        var parallaxInstance = new Parallax(scene5, {
            relativeInput: true
        });
        var scene6 = document.getElementById('scene6');
        var parallaxInstance = new Parallax(scene6, {
            relativeInput: true
        });
        var scene7 = document.getElementById('scene7');
        var parallaxInstance = new Parallax(scene7, {
            relativeInput: true
        });
        var scene8 = document.getElementById('scene8');
        var parallaxInstance = new Parallax(scene8, {
            relativeInput: true
        });
    }

    render() {
        return (
            <div className='mblob'>
                <div id='scene'>
                    <Path9 data-depth="0.6" />
                </div>
                <div id='scene1'>
                    <Path8 data-depth="0.55" />
                </div>
                <div id='scene2'>
                    <Path7 data-depth="0.5" />
                </div>
                <div id='scene3'>
                    <Path6 data-depth="0.45" />
                </div>
                <div id='scene4'>
                    <Path5 data-depth="0.4" />
                </div>
                <div id='scene5'>
                    <Path4 data-depth="0.35" />
                </div>
                <div id='scene6'>
                    <Path3 data-depth="0.3" />
                </div>
                <div id='scene7'>
                    <Path2 data-depth="0.25" />
                </div>
                <div id='scene8'>
                    <Path1 data-depth="0.2" />
                </div>
            </div>
        )
    }
}                  
