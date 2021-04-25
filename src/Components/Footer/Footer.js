import { Container, Row, Col } from 'reactstrap';

import LinkedInLogo from '../../Assets/FooterLogo_LinkedIn.png';
import CodePenLogo from '../../Assets/FooterLogo_CodePen1.png';
import GitHubLogo from '../../Assets/FooterLogo_GitHub.png';

import './footer.css';

const Footer = () => {

    return(
        <Container>
            <Row>
                <Col className='text-center'>
                    <h6>-Find me on-</h6>
                </Col>
            </Row>
            <Row>
                <Col md='4'>
                    <img className='footer-img' src={LinkedInLogo} alt='LinkedIn' />
                </Col>
                <Col md='4'>
                    <img className='footer-img' src={CodePenLogo} alt='CodePen' />
                </Col>
                <Col md='4'>
                    <img className='footer-img' src={GitHubLogo} alt='GitHub' />
                </Col>
            </Row>
            <Row>
                <Col className='text-center'>
                    <small>Sean Dwyer &copy; 2021</small>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;