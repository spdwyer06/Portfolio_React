import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

// import Project from './Project';

import './portfolio.css';

const ProjectList = ({ projectLanguage }) => {
    const [projects, setProjects] = useState([]);

    const cSharpProjects = [
        {
            title: 'C# Project 1',
            description: 'Project description',
            utilizes: ['Techniques', 'the', 'project', 'utilizes']
        },
        {
            title: 'C# Project 2',
            description: 'Project description',
            utilizes: ['Techniques', 'the', 'project', 'utilizes']
        },
        {
            title: 'C# Project 3',
            description: 'Project description',
            utilizes: ['Techniques', 'the', 'project', 'utilizes']
        }
    ];

    const javaScriptProjects = [
        {
            title: 'JS Project 1',
            description: 'Project description',
            utilizes: ['Techniques', 'the', 'project', 'utilizes']
        },
        {
            title: 'JS Project 2',
            description: 'Project description',
            utilizes: ['Techniques', 'the', 'project', 'utilizes']
        },
        {
            title: 'JS Project 3',
            description: 'Project description',
            utilizes: ['Techniques', 'the', 'project', 'utilizes']
        }
    ];

    const pythonProjects = [
        {
            title: 'Python Project 1',
            description: 'Project description',
            utilizes: ['Techniques', 'the', 'project', 'utilizes']
        },
        {
            title: 'Python Project 2',
            description: 'Project description',
            utilizes: ['Techniques', 'the', 'project', 'utilizes']
        },
        {
            title: 'Python Project 3',
            description: 'Project description',
            utilizes: ['Techniques', 'the', 'project', 'utilizes']
        }
    ];

    const determineProjectsToLoad = () => {
        switch(projectLanguage){
            case 'C#':
                console.log('Setting C# projects');
                setProjects(cSharpProjects);
                break;
            case 'JS':
                console.log('Setting JS projects');
                setProjects(javaScriptProjects);
                break;
            case 'Python':
                console.log('Setting Python projects');
                setProjects(pythonProjects);
                break; 
            default:
                break;
        }
    }

    useEffect(() => determineProjectsToLoad(), [projectLanguage]);
 
    return(
        <Container>
            <Row>
                <Col className='text-center'>
                    <h3>The selected project language is: {projectLanguage}</h3>
                </Col>
            </Row>
        </Container>
    );
}

export default ProjectList;