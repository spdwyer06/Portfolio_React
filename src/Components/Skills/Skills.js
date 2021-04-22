import React from "react";
import { Container, Row, Col } from "reactstrap";

import CSharpLogo from '../../Assets/SkillsLogo_CSharp.png';
import JSLogo from '../../Assets/SkillsLogo_JavaScript.png';
import PythonLogo from '../../Assets/SkillsLogo_Python.png';
import HtmlCssLogo from '../../Assets/SkillsLogo_HtmlCss.png';
import ReactLogo from '../../Assets/SkillsLogo_React.png';
import GitHubLogo from '../../Assets/SkillsLogo_GitHub.png';

import './skills.css';

const Skills = () => {
    return (
        <Container>
            <Row>
                <Col className='text-center'>
                    Skills
                </Col>
            </Row>
            <br />
            <Row>
                <Col md='4'>
                    <img className='skills-logo' src={CSharpLogo} alt="C# Logo" />
                </Col>
                <Col md='4'>
                    <img className='skills-logo' src={JSLogo} alt="JavaScript Logo" />
                </Col>
                <Col md='4'>
                    <img className='skills-logo' src={PythonLogo} alt='Python Logo' />
                </Col>
            </Row>
            <Row>
                <Col md="4">C#</Col>
                <Col md="4">JavaScript</Col>
                <Col md="4">Python</Col>
            </Row>
            <br />
            <Row>
                <Col md="4">
                    <img className='skills-logo' src={HtmlCssLogo} alt="HTML5/CSS3 Logo" />
                </Col>
                <Col md="4">
                    <img className='skills-logo' src={ReactLogo} alt="React Logo" />
                </Col>
                <Col md="4">
                    <img className='skills-logo' src={GitHubLogo} alt="GitHub Logo" />
                </Col>
            </Row>
            <Row>
                <Col md="4">HTML5/CSS3</Col>
                <Col md="4">React</Col>
                <Col md="4">GitHub</Col>
            </Row>
        </Container>
    );
};

export default Skills;
