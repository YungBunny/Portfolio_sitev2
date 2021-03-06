import React from 'react';
import Parallax from 'parallax-js';
import Path6tl from '../images/blobtopleft/Path_6.svg';
import Path5tl from '../images/blobtopleft/Path_5.svg';
import Path4tl from '../images/blobtopleft/Path_4.svg';
import Path3tl from '../images/blobtopleft/Path_3.svg';
import Path2tl from '../images/blobtopleft/Path_2.svg';
import Path1tl from '../images/blobtopleft/Path_1.svg';


export default class TopLeftBlob extends React.Component {
    componentDidMount() {
        var scenetl = document.getElementById('scenetl');
        var parallaxInstance = new Parallax(scenetl, {
            relativeInput: true
        });
        var scene1tl = document.getElementById('scene1tl');
        var parallaxInstance = new Parallax(scene1tl, {
            relativeInput: true
        });
        var scene2tl = document.getElementById('scene2tl');
        var parallaxInstance = new Parallax(scene2tl, {
            relativeInput: true
        });
        var scene3tl = document.getElementById('scene3tl');
        var parallaxInstance = new Parallax(scene3tl, {
            relativeInput: true
        });
        var scene4tl = document.getElementById('scene4tl');
        var parallaxInstance = new Parallax(scene4tl, {
            relativeInput: true
        });
        var scene5tl = document.getElementById('scene5tl');
        var parallaxInstance = new Parallax(scene5tl, {
            relativeInput: true
        });
    }
    render() {
        return (
            <div className='top-left-blob__layers'>
                <div id='scenetl' className='top-left-blob__layer'>
                    <Path6tl data-depth="0.4" />
                </div>
                <div id='scene1tl' className='top-left-blob__layer'>
                    <Path5tl data-depth="0.35" />
                </div>
                <div id='scene2tl' className='top-left-blob__layer'>
                    <Path4tl data-depth="0.3" />
                </div>
                <div id='scene3tl' className='top-left-blob__layer'>
                    <Path3tl data-depth="0.25" />
                </div>
                <div id='scene4tl' className='top-left-blob__layer'>
                    <Path2tl data-depth="0.2" />
                </div>
                <div id='scene5tl' className='top-left-blob__layer'>
                    <Path1tl data-depth="0.15" />
                </div>
            </div>
        )
    }
}