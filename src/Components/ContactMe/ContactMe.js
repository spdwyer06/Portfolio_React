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
        <Form onSubmit={handleSubmit}>
            <Container>
                <Row>
                    <Col className='text-center'>
                        <h1>Contact Me</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>
                        <Button>Download Resume</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md='4'>
                        <Input type='text' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
                    </Col>
                    <Col md='4'>
                        <Input type='text' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
                    </Col>
                    <Col md='4'>
                        <Input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input type='textarea' placeholder='Message' onChange={(e) => setMessage(e.target.value)} />
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>
                        <Button type='submit'>Send Message</Button>
                    </Col>
                </Row>
            </Container>

        </Form>
    );
};

export default ContactMe;