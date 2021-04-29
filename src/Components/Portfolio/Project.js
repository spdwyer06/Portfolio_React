import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Table, Container, Row, Col } from 'reactstrap';

import './portfolio.css';

const Project = ({ title, projectImg, description, utilizes, projectLink }) => {

    const displayItems = (arr) => {
        const maxIndex = arr.length - 1;

        // return arr.map(item => <span>{item}, </span>);

        return arr.map((item, i) => {
            if(i == maxIndex){
               return <span>{item}</span>
            }

            return <span>{item}, </span>
        });
    }

    return(
        <Col className='project' md='4'>
            <Card>
                <CardImg className='project-img' top width='100%' src={projectImg} alt='Project Image' />
                <CardBody className='project-body'>
                    <CardTitle className='project-title' tag='h6'>{title}</CardTitle> 
                    <CardText className='project-subtitle text-muted '>Utilizes: {displayItems(utilizes)}</CardText>
                    {/* <CardSubtitle tag='h6' className='mb-2 text-muted'>Utilizes: {utilizes.map((item) => <span>{item},</span>)}</CardSubtitle> */}
                    {/* <CardText className='project-description'>{description}</CardText> */}
                    <Button className='project-btn'>View Project</Button>
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