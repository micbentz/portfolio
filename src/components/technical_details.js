import React from 'react';

const TechnicalDetails = () => {
    return (
        <div className="Technical-Details limit-width-1000px">
            <h1>The Technical Side</h1>
            <section className="technical-content">
                <div className="flex-container">
                    <h2>Programming</h2>
                    <ul className="language_list">
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SQL</li>
                        <li>React</li>
                        <li>VSC</li>
                        <li>Agile</li>
                    </ul>
                    {/* <TechnicalDetails /> */}
                </div>
                <div className="flex-container">
                    <h2>Projects</h2>
                    <ul className="project-list">
                        <li className="project">
                            <a href="#">Shape Shift</a>
                            {/* <p>Description</p> */}
                        </li>
                        <li className="project">
                            <a href="#">GSC Site</a>
                            {/* <p>Description</p> */}
                        </li>
                        <li className="project">
                            <a href="#">RDT Protocol</a>
                            {/* <p>Description</p> */}
                        </li>
                        <li className="project">
                            <a href="#">Platanos</a>
                            {/* <p>Description</p> */}
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
};

export default TechnicalDetails;