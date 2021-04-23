import React, { useState } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Table, Container, Row, Col } from 'reactstrap';

import ProjectList from './ProjectList';

import CSharpLogo from '../../Assets/SkillsLogo_CSharp.png';
import JSLogo from '../../Assets/SkillsLogo_JavaScript.png';
import EFALogo from '../../Assets/PortfolioLogo_EFA.png';
//import PythonLogo from '../../Assets/SkillsLogo_Python.png';

import './portfolio.css';

const Portfolio = () => {
    const [showCSharpProjects, setShowCSharpProjects] = useState(false);
    const [showJavaScriptProjects, setShowJavaScriptProjects] = useState(false);
    const [showEFAProjects, setShowEFAProjects] = useState(false);
    //const [showPythonProjects, setShowPythonProjects] = useState(false);
    const [projectLanguage, setProjectLanguage] = useState('');

    const displayProjects = (e) => {
        const targetProjectLanguage = e.target.alt;

        switch(targetProjectLanguage){
            case 'C#':
                console.log('Loading C# projects...');
                setShowJavaScriptProjects(false);
                setShowEFAProjects(false);
                setShowCSharpProjects(true);
                setProjectLanguage('C#');
                break;
            case 'JS':
                console.log('Loading JavaScript projects...');
                setShowEFAProjects(false);
                setShowCSharpProjects(false);
                setShowJavaScriptProjects(true);
                setProjectLanguage('JS');
                break;
            case 'EFA':
                console.log('Loading EFA projects...');
                setShowJavaScriptProjects(false);
                setShowCSharpProjects(false);
                setShowEFAProjects(true);
                setProjectLanguage('EFA');
                break;
            default:
                break;
        }
    }

    return (
        <Container>
            <Row>
                <Col className='text-center'>
                    <h1>Portfolio</h1>
                </Col>
            </Row>
            <Row>
                <Col md='4'>
                    <img className='portfolio-logo' src={CSharpLogo} alt='C#' onClick={(e) => displayProjects(e)} />
                </Col>
                <Col md='4'>
                    <img className='portfolio-logo' src={JSLogo} alt='JS' onClick={(e) => displayProjects(e)} />
                </Col>
                <Col md='4'>
                    <img className='portfolio-logo' src={EFALogo} alt='EFA' onClick={(e) => displayProjects(e)} />
                </Col>
                {/* <Col md='4'>
                    <img className='project-language-logo' src={PythonLogo} alt='Python' onClick={(e) => displayProjects(e)} />
                </Col> */}
            </Row>
            {showCSharpProjects || showJavaScriptProjects || showEFAProjects ? <ProjectList projectLanguage={projectLanguage} /> : null}
            {/* {showCSharpProjects ? <h1>Showing C# projects</h1> : null}
            {showJavaScriptProjects ? <h1>Showing JavaScript projects</h1> : null}
            {showPythonProjects ? <h1>Showing Python projects</h1> : null} */}
        </Container>
    );
};

export default Portfolio;