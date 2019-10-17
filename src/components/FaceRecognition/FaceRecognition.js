import React from 'react';
import './FaceRecognition.css'

// since it is a non state component (pure component), we can use a pure function

const FaceRecognition = ({imageUrl, box}) =>{
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                {/* src is imageUrl received as props */}
                {/* set the id='inputImage' to manipulate the image via DOM */}
                <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'/>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
}
export default FaceRecognition;