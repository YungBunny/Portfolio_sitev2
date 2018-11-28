import React from 'react';
import Parallax from 'parallax-js';
import Path6b from '../images/blobbottomleft/Path_6.svg';
import Path5b from '../images/blobbottomleft/Path_5.svg';
import Path4b from '../images/blobbottomleft/Path_4.svg';
import Path3b from '../images/blobbottomleft/Path_3.svg';
import Path2b from '../images/blobbottomleft/Path_2.svg';
import Path1b from '../images/blobbottomleft/Path_1.svg';

export default class BottomLeftBlob extends React.Component {

    componentDidMount() {
        console.log('blob');
        var sceneb = document.getElementById('sceneb');
        var parallaxInstance = new Parallax(sceneb, {
            relativeInput: true
        });
        var sceneb1 = document.getElementById('sceneb1');
        var parallaxInstance = new Parallax(sceneb1, {
            relativeInput: true
        });
        var sceneb2 = document.getElementById('sceneb2');
        var parallaxInstance = new Parallax(sceneb2, {
            relativeInput: true
        });
        var sceneb3 = document.getElementById('sceneb3');
        var parallaxInstance = new Parallax(sceneb3, {
            relativeInput: true
        });
        var sceneb4 = document.getElementById('sceneb4');
        var parallaxInstance = new Parallax(sceneb4, {
            relativeInput: true
        });
        var sceneb5 = document.getElementById('sceneb5');
        var parallaxInstance = new Parallax(sceneb5, {
            relativeInput: true
        });
    }

    render() {

        return (
            <div className='middle-left-blob__layers'>
                <div id='sceneb' className='middle-left-blob__layer'>
                    <Path6b data-depth="0.5" />
                </div>
                <div id='sceneb1' className='middle-left-blob__layer'>
                    <Path5b data-depth="0.45" />
                </div>
                <div id='sceneb2' className='middle-left-blob__layer'>
                    <Path4b data-depth="0.4" />
                </div>
                <div id='sceneb3' className='middle-left-blob__layer'>
                    <Path3b data-depth="0.35" />
                </div>
                <div id='sceneb4' className='middle-left-blob__layer'>
                    <Path2b data-depth="0.3" />
                </div>
                <div id='sceneb5' className='middle-left-blob__layer'>
                    <Path1b data-depth="0.25" />
                </div>
            </div>
        )
    }
}