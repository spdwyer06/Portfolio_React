import { Button, Container, Row, Col } from 'reactstrap';

import Coin from '../../Assets/LandingZone_Coin.png';

import './landingZone.css';

const LandingZone = () => {
    
    return(
        <Container id='landing-zone' fluid={true}>
            <Row id='first-row'>
                <Col className='text-center'>
                <h1><span><img className='coin' src={Coin} alt='8-bit coin' /></span>INSERT COIN</h1>
                </Col>
            </Row>
            <Row>
                <Col className='text-center'>
                    <h1>Hello, my name is <span className='my-name'>Sean Dwyer</span>.</h1>
                </Col>
            </Row>
            <Row>
                <Col className='text-center'>
                    <h2>I'm a full-stack developer.</h2>   
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