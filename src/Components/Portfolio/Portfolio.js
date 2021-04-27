import React, { useState } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Table, Container, Row, Col } from 'reactstrap';

import ProjectList from './ProjectList';

import CSharpLogo from '../../Assets/SkillsLogo_CSharp.png';
import JSLogo from '../../Assets/SkillsLogo_JavaScript.png';
import EFALogo from '../../Assets/PortfolioLogo_EFA.png';
//import PythonLogo from '../../Assets/SkillsLogo_Python.png';

import './portfolio.css';

const Portfolio = () => {
    //? individual state variables necessary?
    const [showCSharpProjects, setShowCSharpProjects] = useState(false);
    const [showJavaScriptProjects, setShowJavaScriptProjects] = useState(false);
    const [showEFAProjects, setShowEFAProjects] = useState(false);
    //const [showPythonProjects, setShowPythonProjects] = useState(false);
    const [showAllProjects, setShowAllProjects] = useState(true)
    const [projectLanguage, setProjectLanguage] = useState('ALL');

    const displayProjects = (targetProjectLanguage) => {
        // const targetProjectLanguage = e.target.alt;

        // const targetProjectLanguage = e;

        switch(targetProjectLanguage){
            case 'ALL':
                console.log('Loading all projects...');
                setProjectLanguage('ALL');
                break;
            case 'C#':
                console.log('Loading C# projects...');
                setShowAllProjects(false);
                setShowJavaScriptProjects(false);
                setShowEFAProjects(false);
                setShowCSharpProjects(true);
                setProjectLanguage('C#');
                break;
            case 'JS':
                console.log('Loading JavaScript projects...');
                setShowAllProjects(false);
                setShowEFAProjects(false);
                setShowCSharpProjects(false);
                setShowJavaScriptProjects(true);
                setProjectLanguage('JS');
                break;
            case 'EFA':
                console.log('Loading EFA projects...');
                setShowAllProjects(false);
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
        <Container id='portfolio'>
            <Row>
                <Col className='text-center'>
                    <h1 id='portfolio-header'>Portfolio</h1>
                </Col>
            </Row>
            <Row>
                <Col md='3'>
                    <p onClick={() => displayProjects('ALL')}>View All</p>
                    {/* <img className='portfolio-logo' src={CSharpLogo} alt='C#' onClick={(e) => displayProjects(e)} /> */}
                </Col>
                <Col md='3'>
                    <p onClick={() => displayProjects('C#')}><img className='portfolio-logo' src={CSharpLogo} alt='C#' />C#</p>
                    {/* <img className='portfolio-logo' src={CSharpLogo} alt='C#' onClick={(e) => displayProjects(e)} /> */}
                </Col>
                <Col md='3'>
                    <p onClick={() => displayProjects('JS')}><img className='portfolio-logo' src={JSLogo} alt='JS' />JavaScript</p>
                    {/* <img className='portfolio-logo' src={JSLogo} alt='JS' onClick={(e) => displayProjects(e)} /> */}
                </Col>
                <Col md='3'>
                    <p onClick={() => displayProjects('EFA')}><img className='portfolio-logo' src={EFALogo} alt='EFA' />Eleven Fifty Academy</p>
                    {/* <img className='portfolio-logo' src={EFALogo} alt='EFA' onClick={(e) => displayProjects(e)} /> */}
                </Col>
                {/* <Col md='4'>
                    <img className='project-language-logo' src={PythonLogo} alt='Python' onClick={(e) => displayProjects(e)} />
                </Col> */}
            </Row>
            <ProjectList projectLanguage={projectLanguage} />
            {/* {showCSharpProjects || showJavaScriptProjects || showEFAProjects ? <ProjectList projectLanguage={projectLanguage} /> : null} */}
            {/* {showCSharpProjects ? <h1>Showing C# projects</h1> : null}
            {showJavaScriptProjects ? <h1>Showing JavaScript projects</h1> : null}
            {showPythonProjects ? <h1>Showing Python projects</h1> : null} */}
        </Container>
    );
};

export default Portfolio;