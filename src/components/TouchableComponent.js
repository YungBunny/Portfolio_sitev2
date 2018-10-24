import React from 'react';
import Image1 from '../images/styling_portfolio/Dreamingless-12-copy-2-compressor.jpg';

const PositionLabel = (props) => {
    const {
        isActive = false,
        isPositionOutside = true,
        backgroundImage = Image1
    } = props;

    return (
        <div>
            {isActive == true ? (
                <div className='imagespot'>
                    <img className='wsimages' src={backgroundImage} />
                </div>
            ) : (
                    <div></div>
                )}
        </div>
    );
};

PositionLabel.defaultProps = {
    shouldShowIsActive: true,
    backgroundImage: Image1
};

export default PositionLabel;