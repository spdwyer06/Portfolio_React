import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import EmailJS from 'emailjs-com';

import MyResume from '../../Assets/SeanDwyerResume.pdf';

import './ContactMe.css';

const ContactMe = () => {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('First Name:', firstName);
        // console.log('Last Name:', lastName);
        // console.log('Email:', email);
        // console.log('Message:', message);

        EmailJS.sendForm('service_l7w4j5r', 'template_drtbybj', e.target, 'user_gFEfwgQohW2W1YtHEooap')
        // EmailJS.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            .then(res => {
                window.location.reload()
            }, err => {
                console.log(err.text);
            });
    }

    return (
        <Container id='contact-me' fluid={true}>
            <Row>
                <Col className='text-center'>
                    <h1 id='contact-me-header'>Contact Me</h1>
                </Col>
            </Row>
            <Row>
                <Col className='text-center'>
                    <div id='resume-btn-bkg'>
                        <a  href={MyResume} download='SeanDwyerResume.pdf'><Button id='resume-btn'>Download My Resume</Button></a>
                    </div>
                </Col>
            </Row>
            <Form onSubmit={handleSubmit}>
                <Row className='form-row'>
                    <Col sm='6' md={{size: 5, offset: 1}} >
                        <Input type='text' placeholder='First Name' name='from_first_name' onChange={(e) => setFirstName(e.target.value)} />
                    </Col>
                    <Col sm='6' md='5'>
                        <Input type='text' placeholder='Last Name' name='from_last_name' onChange={(e) => setLastName(e.target.value)} />
                    </Col>
                </Row>
                <Row className='form-row'>
                    {/* <Col className='col-sm-12 col-md-6 offset-md-3'> */}
                    <Col sm='12' md={{size: 8, offset: 2}}>
                        <Input type='email' placeholder='Email' name='from_email' onChange={(e) => setEmail(e.target.value)} />
                    </Col>
                </Row>
                <Row className='form-row'>
                    <Col sm='12' md={{size: 10, offset: 1}}>
                        <Input type='textarea' placeholder='Message' name='message' onChange={(e) => setMessage(e.target.value)} />
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>
                        <div id='form-submit-btn-bkg'>
                            <Button id='form-submit-btn' className='eight-bit-btn' type='submit'>Send Message</Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default ContactMe;