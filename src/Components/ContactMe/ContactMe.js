import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

import MyResume from '../../Assets/SeanDwyerResume.pdf';

import './contactMe.css';

const ContactMe = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Message:', message);
    }

    return (
        <Container id='contact-me' fluid={true}>
            <Row className='form-row'>
                <Col className='text-center'>
                    <h1>Contact Me</h1>
                </Col>
            </Row>
            <Row>
                <Col className='text-center'>
                    <a  href='../../Assets/SeanDwyerResume.pdf' download='SeanDwyerResume.pdf'><Button>Download My Resume</Button></a>
                </Col>
            </Row>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col sm='6' md={{size: 5, offset: 1}} >
                        <Input type='text' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
                    </Col>
                    <Col sm='6' md='5'>
                        <Input type='text' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
                    </Col>
                </Row>
                <Row>
                    {/* <Col className='col-sm-12 col-md-6 offset-md-3'> */}
                    <Col sm='12' md={{size: 8, offset: 2}}>
                        <Input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    </Col>
                </Row>
                <Row>
                    <Col sm='12' md={{size: 10, offset: 1}}>
                        <Input type='textarea' placeholder='Message' onChange={(e) => setMessage(e.target.value)} />
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>
                        <Button className='eight-bit-btn' type='submit'>Send Message</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default ContactMe;