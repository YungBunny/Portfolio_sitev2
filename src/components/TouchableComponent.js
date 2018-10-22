import React from 'react';

const PositionLabel = (props) => {
  const {
    backgroundColor = 'none'
  } = props;

  return (
    <div style={{backgroundColor: backgroundColor}}>
        WARDROBE STYLING
    </div>
  );
};

PositionLabel.defaultProps = {
  shouldShowIsActive: true,
  backgroundColor: 'none',
};

export default PositionLabel;