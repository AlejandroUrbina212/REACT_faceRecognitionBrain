import React from 'react';

// since it is a non state component (pure component), we can use a pure function

const Navigation = () =>{
    return (
        <nav style={{display: 'flex', justifyContent:'flex-end'}}>
            {/* since we are passing an object we use brackets */}
            <p className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
    );
}
export default Navigation;