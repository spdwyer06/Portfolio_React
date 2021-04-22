import React from "react";
// import {Table} from 'reactstrap';
import { Container, Row, Col } from "reactstrap";

const Skills = () => {
    return (
        <Container>
            <Row>Skills</Row>
            <Row>
                <Col md="3">
                    <img src="../..skillsLogo/Assets/SkillLogo_CSharp.png" alt="C# Logo" />
                </Col>
                <Col md="3">
                    <img src="" alt="JavaScript Logo" />
                </Col>
                {/* <td><img src='' alt='Python Logo' /></td> */}
                <Col md="3">
                    <img src="" alt="HTML5/CSS3 Logo" />
                </Col>
                <Col md="3">
                    <img src="" alt="React Logo" />
                </Col>
            </Row>
            <Row>
                <Col md="3">C#</Col>
                <Col md="3">JavaScript</Col>
                {/* <td>Python</td> */}
                <Col md="3">HTML5/CSS3</Col>
                <Col md="3">React</Col>
            </Row>
        </Container>
    );
};

export default Skills;
