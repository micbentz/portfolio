import React from 'react';

const Header = () => {
    return (
        <div className="Header">
            <div className="Header-responsive">
                <h5>Built using React!</h5>
                <div className="my-info limit-width">
                    <h1>Michael Bentz</h1>
                    <h4>UF Alumni</h4>
                    <div className="profile-picture" />
                </div>
            </div>
            
        </div>
        
    )
};

export default Header;