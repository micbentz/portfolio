import React from 'react';

import TechnicalDetails from './technical_details';

const MainPage = () => {
    return (
        <div className="MainPage">
            <div className="intro-info limit-width">
                <article>
                    <h2>About Me</h2>
                    <p>I am a UF computer science graduate passionate about writing code. With a background in mobile
                        and web development I aim to provide the best user experience with modern, 
                        simple-to-navigate applications.</p>
                </article>
            </div>
            <div className="responsive-container">
                <div className="full-width-image" />
            </div>
            <TechnicalDetails />
        </div>
    )
};
export default MainPage;