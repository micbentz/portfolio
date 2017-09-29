import React from 'react';
import FontAwesome from 'react-fontawesome';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer-content limit-width-1000px">
                <div className="social-media-links">
                    <a href="https://github.com/micbentz">
                        <FontAwesome 
                            className="fa fa-github" />
                    </a>
                    <a href="https://www.linkedin.com/in/michael-bentz-449370106/">
                        <FontAwesome 
                            className="fa fa-linkedin" />
                    </a>
                    <a href="https://www.facebook.com/mike.bentz.9?ref=bookmarks">
                        <FontAwesome 
                            className="fa fa-facebook" />
                    </a>
                </div>
                <div className="contact-info">
                    <p>mbentz@ufl.edu</p>
                    <p>(754) 202-3934</p>
                </div>
            </div>
            <div className="Footer-copyright">
                <p>Michael Bentz 2017.</p>
            </div>
        </div>
    )
};

export default Footer;