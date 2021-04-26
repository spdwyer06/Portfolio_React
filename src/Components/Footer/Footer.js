import { Container, Row, Col, Button } from 'reactstrap';

import LinkedInLogo from '../../Assets/FooterLogo_LinkedIn.png';
import CodePenLogo from '../../Assets/FooterLogo_CodePen1.png';
import GitHubLogo from '../../Assets/FooterLogo_GitHub.png';

import './footer.css';

const Footer = () => {

    return(
        <Container id='footer' fluid={true}>
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
            <Row>
                {/* <Col sm={{size: 'auto', offset: 5}}> */}
                <Col>
                <a href='#landing-zone'><Button><i className="fa fa-angle-double-up"></i></Button></a>
                    {/* <FontAwesomeIcon icon='fa-angle-double-up' /> */}
                    {/* <FontAwesomeIcon icon={['fas', 'fa-angle-double-up']} /> */}
                    {/* <Button><FontAwesomeIcon icon={['fas', 'fa-angle-double-up']} /></Button> */}
                        {/* <i className="fas fa-angle-double-up"></i></Button> */}
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;