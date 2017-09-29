import React from 'react';

import TechnicalDetails from './technical_details';

const MainPage = () => {
    return (
        <div className="MainPage">
            <div className="intro-info limit-width">
                <article>
                    <h2>About me</h2>
                    <p>UF graduate passionate about writing code. Web Development, javascript,
                        Responsive web design. Focused on user experience and beautiful/clean interfaces
                        frameworks react, css html. android cross platform</p>
                </article>
                <article>
                    <h2>Programming Experience</h2>
                    <ul className="language_list">
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SQL</li>
                        <li>React</li>
                    </ul>
                    {/* <TechnicalDetails /> */}
                </article>
            </div>
            <div className="responsive-container">
                <div className="full-width-image" />
            </div>
            <div className="personal-info limit-width">
                <article>
                    <h2>Interests</h2>
                    <p>Netus porta. Nulla magna. Dolor vitae placerat. Curae porta. Dolor velit lorem tempor lorem adipiscing nonummy odio. Curae massa ipsum nonummy vulputate mauris duis. Etiam vitae lorem tortor vestibulum nulla. Lacus curae diam cum nisi netus cubilia nonummy nisl ipsum ve rutrum dui. Purus morbi metus euismod posuere primis. Metus purus massa. Massa nulla sem ipsum sem hac pellentesque augue et id phasellus. Vitae morbi scelerisque in litora ac aenean bibendum tristique dictumst dictum turpis aliquam. Massa lacus dictumst proin et tempus elit suspendisse laoreet metus morbi. Fusce donec fames conubia varius fames netus. Porta metus.</p>
                </article>
                <article>
                    <h2>Projects</h2>
                    <p>Netus porta. Nulla magna. Dolor vitae placerat. Curae porta. Dolor velit lorem tempor lorem adipiscing nonummy odio. Curae massa ipsum nonummy vulputate mauris duis. Etiam vitae lorem tortor vestibulum nulla. Lacus curae diam cum nisi netus cubilia nonummy nisl ipsum ve rutrum dui. Purus morbi metus euismod posuere primis. Metus purus massa. Massa nulla sem ipsum sem hac pellentesque augue et id phasellus. Vitae morbi scelerisque in litora ac aenean bibendum tristique dictumst dictum turpis aliquam. Massa lacus dictumst proin et tempus elit suspendisse laoreet metus morbi. Fusce donec fames conubia varius fames netus. Porta metusa.</p>
                </article>
            </div>
        </div>
    )
};
export default MainPage;