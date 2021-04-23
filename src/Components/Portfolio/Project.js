

import './portfolio.css';
import ProjectList from './ProjectList';

const Project = ({ title, description, utilizes, projectLink }) => {


    return(
        <div>
            <h1>{title}</h1>    
            <h2>{description}</h2>
            {utilizes.map((item) => <span>{item} </span>)}
            <h2>{projectLink}</h2>  
        </div>
    );
}

export default Project;