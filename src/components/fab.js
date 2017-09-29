import React from 'react';

const FAB = () => {
    return (
        <div
            onClick={doThis} 
            className="FAB">
            <p>Contact Me</p>
        </div>
    )
};

function doThis() {
    console.log('Fab was clicked');
}

export default FAB;