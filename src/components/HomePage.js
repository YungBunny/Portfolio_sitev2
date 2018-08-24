import React from 'react';
import Path9 from '../images/mainblob/Path_9.svg';
import Path8 from '../images/mainblob/Path_8.svg';
import Path7 from '../images/mainblob/Path_7.svg';
import Path6 from '../images/mainblob/Path_6.svg';
import Path5 from '../images/mainblob/Path_5.svg';
import Path4 from '../images/mainblob/Path_4.svg';
import Path3 from '../images/mainblob/Path_3.svg';
import Path2 from '../images/mainblob/Path_2.svg';
import Path1 from '../images/mainblob/Path_1.svg';

console.log('hey');

export default class HomePage extends React.Component {

    componentDidMount() {
        const para = window.document.getElementById('parallax')
        console.log(para);
    }
    render() {
        return(
        <div className='homepage' id='parallax'>
        <div className='homepage_electric'><Path9 />
            <div className='homepage_black'><Path8 />
                <div className='homepage_crimson'><Path7 />
                    <div className='homepage_mauve'><Path6 />
                        <div className='homepage_forest'><Path5 />
                            <div className='homepage_spicy'><Path4 />
                                <div className='homepage_mud'><Path3 />
                                    <div className='homepage_mint'><Path2 />
                                            <div className='homepage_eggshell'>
                                                <Path1 />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
