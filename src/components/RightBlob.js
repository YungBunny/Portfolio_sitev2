import React from 'react';
import Parallax from 'parallax-js';
import Path5lr from '../images/blobright/Path_5.svg';
import Path4lr from '../images/blobright/Path_4.svg';
import Path3lr from '../images/blobright/Path_3.svg';
import Path2lr from '../images/blobright/Path_2.svg';
import Path1lr from '../images/blobright/Path_1.svg';

export default class RightBlob extends React.Component {

    componentDidMount() {
        var scener = document.getElementById('scener');
        var parallaxInstance = new Parallax(scener, {
            relativeInput: true
        });
        var scene1r = document.getElementById('scene1r');
        var parallaxInstance = new Parallax(scene1r, {
            relativeInput: true
        });
        var scene2r = document.getElementById('scene2r');
        var parallaxInstance = new Parallax(scene2r, {
            relativeInput: true
        });
        var scene3r = document.getElementById('scene3r');
        var parallaxInstance = new Parallax(scene3r, {
            relativeInput: true
        });
        var scene4r = document.getElementById('scene4r');
        var parallaxInstance = new Parallax(scene4r, {
            relativeInput: true
        });
    }
    render() {
        return (
            <div className='lrblob'>
                <div id='scener'>
                    <Path5lr data-depth="0.5" />
                </div>
                <div id='scene1r'>
                    <Path4lr data-depth="0.45" />
                </div>
                <div id='scene2r'>
                    <Path3lr data-depth="0.4" />
                </div>
                <div id='scene3r'>
                    <Path2lr data-depth="0.35" />
                </div>
                <div id='scene4r'>
                    <Path1lr data-depth="0.3" />
                </div>
            </div>
        )
    }
}