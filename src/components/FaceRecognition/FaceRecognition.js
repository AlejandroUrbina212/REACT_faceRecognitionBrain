import React from 'react';

// since it is a non state component (pure component), we can use a pure function

const FaceRecognition = ({imageUrl}) =>{
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                {/* src is imageUrl received as props */}
                <img alt='' src={imageUrl} width='500px' height='auto'/>
            </div>
        </div>
    );
}
export default FaceRecognition;