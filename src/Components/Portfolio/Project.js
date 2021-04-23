import { Col } from 'reactstrap';

import './portfolio.css';

const Project = ({ title, description, utilizes, projectLink }) => {


    return(
        <Col md='4'>
            <h1>{title}</h1>    
            <h2>{description}</h2>
            {utilizes.map((item) => <span>{item} </span>)}
            <h3>{projectLink}</h3>  
        </Col>
    );
}

export default Project;