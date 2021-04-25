import { Button, Container, Row, Col } from 'reactstrap';

import './landingZone.css';

const LandingZone = () => {
    
    return(
        <Container className='landing-div' fluid={true}>
            <Row>
                <Col className='text-center'>
                    <h1>Hey there, my name is <span className='my-name'>Sean Dwyer</span>.</h1>
                </Col>
            </Row>
            <Row>
                <Col className='text-center'>
                    <h1>I'm a full-stack developer.</h1>   
                </Col>
            </Row>
            <Row>
                <Col className='text-center'>
                    <a href='#portfolio'><Button>View My Work</Button></a>
                </Col>
            </Row>
        </Container>
    );
}

export default LandingZone;