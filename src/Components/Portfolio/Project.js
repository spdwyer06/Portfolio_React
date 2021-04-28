import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Table, Container, Row, Col } from 'reactstrap';

import './portfolio.css';

const Project = ({ title, projectImg, description, utilizes, projectLink }) => {


    return(
        <Col md='4'>
            <Card>
                <CardImg top width='100%' src={projectImg} alt='Project Image' />
                <CardBody>
                    <CardTitle tag='h5'>{title}</CardTitle> 
                    <CardSubtitle tag='h6' className='mb-2 text-muted'>Utilizes: {utilizes.map((item) => <span>{item},</span>)}</CardSubtitle>
                    <CardText>{description}</CardText>
                    <Button>View Project</Button>
                </CardBody>
            </Card>
        </Col>
    );

    // return(
    //     <Col md='4'>
    //         <h1>{title}</h1>    
    //         <h2>{description}</h2>
    //         {utilizes.map((item) => <span>{item} </span>)}
    //         <h3>{projectLink}</h3>  
    //     </Col>
    // );
}

export default Project;