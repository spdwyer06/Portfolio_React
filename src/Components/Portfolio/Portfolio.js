import React, { useState } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Table, Container, Row, Col } from 'reactstrap';

import ProjectList from './ProjectList';

import CSharpLogo from '../../Assets/SkillsLogo_CSharp.png';
import JSLogo from '../../Assets/SkillsLogo_JavaScript.png';
import PythonLogo from '../../Assets/SkillsLogo_Python.png';

import './portfolio.css';

const Portfolio = () => {
    const [showCSharpProjects, setShowCSharpProjects] = useState(false);
    const [showJavaScriptProjects, setShowJavaScriptProjects] = useState(false);
    const [showPythonProjects, setShowPythonProjects] = useState(false);
    const [projectLanguage, setProjectLanguage] = useState('');

    const displayProjects = (e) => {
        const targetProjectLanguage = e.target.alt;

        switch(targetProjectLanguage){
            case 'C#':
                console.log('Loading C# projects...');
                setShowJavaScriptProjects(false);
                setShowPythonProjects(false);
                setShowCSharpProjects(true);
                setProjectLanguage('C#');
                break;
            case 'JS':
                console.log('Loading JavaScript projects...');
                setShowPythonProjects(false);
                setShowCSharpProjects(false);
                setShowJavaScriptProjects(true);
                setProjectLanguage('JS');
                break;
            case 'Python':
                console.log('Loading Python projects...');
                setShowJavaScriptProjects(false);
                setShowCSharpProjects(false);
                setShowPythonProjects(true);
                setProjectLanguage('Python');
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
                    <img className='project-language-logo' src={CSharpLogo} alt='C#' onClick={(e) => displayProjects(e)} />
                </Col>
                <Col md='4'>
                    <img className='project-language-logo' src={JSLogo} alt='JS' onClick={(e) => displayProjects(e)} />
                </Col>
                <Col md='4'>
                    <img className='project-language-logo' src={PythonLogo} alt='Python' onClick={(e) => displayProjects(e)} />
                </Col>
            </Row>
            {showCSharpProjects ? <h1>Showing C# projects</h1> : null}
            {showJavaScriptProjects ? <h1>Showing JavaScript projects</h1> : null}
            {showPythonProjects ? <h1>Showing Python projects</h1> : null}
        </Container>
    );
};

export default Portfolio;