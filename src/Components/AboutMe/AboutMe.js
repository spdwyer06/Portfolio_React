import React from 'react';
import {Media, Col, Row, Container} from 'reactstrap';
import AboutMeImg from '../../Assets/AboutMeImg.jpg';
import AboutMeImg2 from '../../Assets/AboutMeImg2.jpg';
import './aboutMe.css';

const AboutMe = () => {
    return (
    <Container id='about-me' fluid={true}>
        <Row>
            <Col md='4'>
                <img className='about-me-img' src={AboutMeImg2} alt='Me' />
            </Col>
            <Col md='8'>
                    <h2 id='about-me-header'>About Me</h2>
                    <br />
                    <p>
                        I was born in Chicago, Illinois but have spent most of my life in Fishers, Indiana.<br />
                        I've always enjoyed deconstructing and rebuilding things just to understand how they <br />
                        work and I've found that software development offers the same enjoyment. The feeling of <br />
                        excitement I get when I finally solve whatever problem I've been working on for hours is <br />
                        amazing, and the knowledge to be able to solve that same problem easily is invaluable. <br />
                        Although most of my experience is outside of software development field I am a very <br />
                        thorough and detail oriented person that loves the problem solving nature of this field <br />
                        and am looking forward to starting my career in the tech industry.
                    </p>
            </Col> 
        </Row>
    </Container>
    
    // <Media>
    //     <Media left>
    //         <img className='aboutMeImg' src={AboutMeImg} />
    //         {/* <Media object data-src='../../Assets/AboutMeImg.jpg' alt="About Me Image Here" />  */}
    //     </Media>
    //     <Media body>
    //         <Media heading>
    //             About Me
    //         </Media>
    //         I was born in Chicago, Illinois but have spent most of my life in Fishers, Indiana.
    //         I've always enjoyed deconstructing and rebuilding things just to understand how they
    //         work and I've found that software development offers the same enjoyment. The feeling of
    //         excitement I get when I finally solve whatever problem I've been working on for hours is
    //         amazing, and the knowledge to be able to solve that same problem easily is invaluable.
    //         Although most of my experience is outside of software development field I am a very
    //         thorough and detail oriented person that loves the problem solving nature of this field
    //         and am looking forward to starting my career in the tech industry.
    //     </Media>
    // </Media>
    );
};

export default AboutMe;