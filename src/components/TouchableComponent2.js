import React from 'react';
import Imageui1 from '../images/uiuxportfolio/Screen Shot 2018-10-24 at 5.41.20 AM.png';

const PositionLabel2 = (props) => {
    const {
        isActive = false,
        isPositionOutside = true,
        backgroundShot = Imageui1
    } = props;

    return (
        <div>
            {isActive == true ? (
                <div>
                    <img className='uiux-design__images' src={backgroundShot} />
                </div>
            ) : (
                    <div></div>
                )}
        </div>
    );
};

PositionLabel2.defaultProps = {
    shouldShowIsActive: true,
    backgroundShot: Imageui1
};

export default PositionLabel2;