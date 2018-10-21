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
            <div className='trblob'>
                <div id='scenetr'>
                    <Path6tr data-depth="0.3" />
                </div>
                <div id='scene1tr'>
                    <Path5tr data-depth="0.25" />
                </div>
                <div id='scene2tr'>
                    <Path4tr data-depth="0.2" />
                </div>
                <div id='scene3tr'>
                    <Path3tr data-depth="0.15" />
                </div>
                <div id='scene4tr'>
                    <Path2tr data-depth="0.1" />
                </div>
                <div id='scene5tr'>
                    <Path1tr data-depth="0.05" />
                </div>
            </div>
        )
    }
}