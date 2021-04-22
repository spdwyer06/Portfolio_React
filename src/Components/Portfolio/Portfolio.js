import React, { useState } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Table, Container, Row, Col } from 'reactstrap';

import CSharpLogo from '../../Assets/SkillsLogo_CSharp.png';
import JSLogo from '../../Assets/SkillsLogo_JavaScript.png';
import PythonLogo from '../../Assets/SkillsLogo_Python.png';

import './portfolio.css';

const Portfolio = () => {
    const [showCSharpProjects, setShowCSharpProjects] = useState(false);
    const [showJavaScriptProjects, setShowJavaScriptProjects] = useState(false);
    const [showPythonProjects, setShowPythonProjects] = useState(false);

    return (
        <Container>
            <Row>
                <Col className='text-center'>
                    <h1>Portfolio</h1>
                </Col>
            </Row>
            <Row>
                <Col md='4'>
                    <a onClick={() => setShowCSharpProjects(!showCSharpProjects)}>
                        <img className='project-language-logo' src={CSharpLogo} alt='Click here to see my C# projects.' />
                    </a>
                </Col>
                <Col md='4'>
                    <a onClick={() => setShowJavaScriptProjects(!showJavaScriptProjects)}>
                        <img className='project-language-logo' src={JSLogo} alt='Click here to see my JavaScript projects' />
                    </a>
                </Col>
                <Col md='4'>
                    <a onClick={() => setShowPythonProjects(!showPythonProjects)}>
                        <img className='project-language-logo' src={PythonLogo} alt='Click here to see my Python projects' />
                    </a>
                </Col>
            </Row>
            {showCSharpProjects ? <h1>Showing C# projects</h1> : null}
            {showJavaScriptProjects ? <h1>Showing JavaScript projects</h1> : null}
            {showPythonProjects ? <h1>Showing Python projects</h1> : null}
        </Container>
    );
};

export default Portfolio;