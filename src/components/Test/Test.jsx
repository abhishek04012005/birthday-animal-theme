import * as React from 'react';
import frameCircle from '../../assests/circle_frame.png'
import childImage from '../../assests/heroBaby-circle.png'
import './Test.css';



const Test = () => {


  return (
    <>
      <div className="frame">
        <div className="circle-frame">
          <div className='circle-frame-image'>

            <img src={frameCircle} alt="" />

          </div>
          <div className='child-image'> <img src={childImage} alt="" /></div>
        </div>
      </div>

    </>
  );
};

export default Test;
