

import './portfolio.css';
import ProjectList from './ProjectList';

const Project = ({ title, description, utilizes }) => {


    return(
        <div>
            <h1>{title}</h1>    
            <h2>{description}</h2>
            {/* {utilizes.map((item) => <h3>item</h3>)} */}
        </div>
    );
}

export default Project;