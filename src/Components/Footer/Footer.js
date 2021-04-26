import { Container, Row, Col, Button } from 'reactstrap';

import LinkedInLogo from '../../Assets/FooterLogo_LinkedIn.png';
import CodePenLogo from '../../Assets/FooterLogo_CodePen1.png';
import GitHubLogo from '../../Assets/FooterLogo_GitHub10.png';
import GitHubLogo2 from '../../Assets/FooterLogo_GitHub2.png';
import GitHubLogo3 from '../../Assets/FooterLogo_GitHub3.png';
import LinkedInLogo2 from '../../Assets/FooterLogo_LinkedIn2.png';
import CodePenLogo2 from '../../Assets/FooterLogo_CodePen2.png';
import CodePenLogo3 from '../../Assets/FooterLogo_CodePen3.png';

import './footer.css';

const Footer = () => {

    return(
        <Container id='footer' fluid={true}>
            <Row>
                <Col className='text-center'>
                    <h6 id='footer-header'>-Find me on-</h6>
                </Col>
            </Row>
            <Row>
                <Col md='4'>
                    <a href='https://www.linkedin.com/in/spdwyer3/' target='_blank'><img className='footer-img' src={LinkedInLogo2} alt='LinkedIn' /></a>
                    {/* <img className='footer-img' src={LinkedInLogo2} alt='LinkedIn' /> */}
                </Col>
                <Col md='4'>
                    <a href='https://codepen.io/dark_thorns/pens/public' target='_blank'><img className='footer-img' src={CodePenLogo3} alt='CodePen' /></a>
                    {/* <img className='footer-img' src={CodePenLogo3} alt='CodePen' /> */}
                </Col>
                <Col md='4'>
                    <a href='https://github.com/spdwyer06' target='_blank'><img className='footer-img' src={GitHubLogo} alt='GitHub' /></a>
                    {/* <img className='footer-img' src={GitHubLogo} alt='GitHub' /> */}
                </Col>
            </Row>
            <Row>
                <Col className='text-center'>
                    <small>Sean Dwyer &copy; 2021</small>
                </Col>
            </Row>
            <Row>
                {/* <Col sm={{size: 'auto', offset: 5}}> */}
                <Col id='final-row'>
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