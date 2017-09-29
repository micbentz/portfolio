import React from 'react';

import TechnicalDetails from './technical_details';

const MainPage = () => {
    return (
        <div className="MainPage">
            <div className="intro-info limit-width">
                <article>
                    <h2>About me</h2>
                    <p>UF computer science graduate passionate about writing code. Web Development, javascript,
                        Responsive web design. Focused on user experience and beautiful/clean interfaces
                        frameworks react, css html. android cross platform</p>
                </article>
                <article className="limit-width">
                    <h2>Interests</h2>
                    <p>UF computer science graduate passionate about writing code. Web Development, javascript,
                        Responsive web design. Focused on user experience and beautiful/clean interfaces
                        frameworks react, css html. android cross platform</p>
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