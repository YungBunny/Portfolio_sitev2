import React from 'react';
import Parallax from 'parallax-js';
import Path6tr from '../images/trblob/trblob6.svg';
import Path5tr from '../images/trblob/trblob5.svg';
import Path4tr from '../images/trblob/trblob4.svg';
import Path3tr from '../images/trblob/trblob3.svg';
import Path2tr from '../images/trblob/trblob2.svg';
import Path1tr from '../images/trblob/trblob1.svg';


export default class TopLeftBlob extends React.Component {
    componentDidMount() {
        var scenetr = document.getElementById('scenetr');
        var parallaxInstance = new Parallax(scenetr, {
            relativeInput: true
        });
        var scene1tr = document.getElementById('scene1tr');
        var parallaxInstance = new Parallax(scene1tr, {
            relativeInput: true
        });
        var scene2tr = document.getElementById('scene2tr');
        var parallaxInstance = new Parallax(scene2tr, {
            relativeInput: true
        });
        var scene3tr = document.getElementById('scene3tr');
        var parallaxInstance = new Parallax(scene3tr, {
            relativeInput: true
        });
        var scene4tr = document.getElementById('scene4tr');
        var parallaxInstance = new Parallax(scene4tr, {
            relativeInput: true
        });
        var scene5tr = document.getElementById('scene5tr');
        var parallaxInstance = new Parallax(scene5tr, {
            relativeInput: true
        });
    }
    render() {
        return (
            <div className='top-right-blob__layers'>
                <div id='scenetr' className='top-right-blob__layer'>
                    <Path6tr data-depth="0.4" className='top-right-blob__svg'/>
                </div>
                <div id='scene1tr' className='top-right-blob__layer'>
                    <Path5tr data-depth="0.35" className='top-right-blob__svg'/>
                </div>
                <div id='scene2tr' className='top-right-blob__layer'>
                    <Path4tr data-depth="0.3" className='top-right-blob__svg'/>
                </div>
                <div id='scene3tr' className='top-right-blob__layer'>
                    <Path3tr data-depth="0.25" className='top-right-blob__svg'/>
                </div>
                <div id='scene4tr' className='top-right-blob__layer'>
                    <Path2tr data-depth="0.2" className='top-right-blob__svg'/>
                </div>
                <div id='scene5tr' className='top-right-blob__layer'>
                    <Path1tr data-depth="0.15" className='top-right-blob__svg'/>
                </div>
            </div>
        )
    }
}