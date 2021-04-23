import { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';

import Project from './Project';

import './portfolio.css';

const ProjectList = ({ projectLanguage }) => {
    const [projects, setProjects] = useState([]);

    const cSharpProjects = [
        {
            title: 'C# Project 1',
            description: 'Project description',
            utilizes: ['Techniques', 'the', 'project', 'utilizes'],
            projectLink: 'GitHub/deployed link to project'
        },
        {
            title: 'C# Project 2',
            description: 'Project description',
            utilizes: ['Techniques', 'the', 'project', 'utilizes'],
            projectLink: 'GitHub/deployed link to project'
        },
        {
            title: 'C# Project 3',
            description: 'Project description',
            utilizes: ['Techniques', 'the', 'project', 'utilizes'],
            projectLink: 'GitHub/deployed link to project'
        }
    ];

    const javaScriptProjects = [
        {
            title: 'JS Project 1',
            description: 'Project description',
            utilizes: ['Techniques', 'the', 'project', 'utilizes'],
            projectLink: 'GitHub/deployed link to project'
        },
        {
            title: 'JS Project 2',
            description: 'Project description',
            utilizes: ['Techniques', 'the', 'project', 'utilizes'],
            projectLink: 'GitHub/deployed link to project'
        },
        {
            title: 'JS Project 3',
            description: 'Project description',
            utilizes: ['Techniques', 'the', 'project', 'utilizes'],
            projectLink: 'GitHub/deployed link to project'
        }
    ];

    const efaProjects = [
        {
            title: 'EFA Project 1',
            description: 'Project description',
            utilizes: ['Techniques', 'the', 'project', 'utilizes'],
            projectLink: 'GitHub/deployed link to project'
        },
        {
            title: 'EFA Project 2',
            description: 'Project description',
            utilizes: ['Techniques', 'the', 'project', 'utilizes'],
            projectLink: 'GitHub/deployed link to project'
        },
        {
            title: 'EFA Project 3',
            description: 'Project description',
            utilizes: ['Techniques', 'the', 'project', 'utilizes'],
            projectLink: 'GitHub/deployed link to project'
        }
    ];

    // const pythonProjects = [
    //     {
    //         title: 'Python Project 1',
    //         description: 'Project description',
    //         utilizes: ['Techniques', 'the', 'project', 'utilizes'],
    //         projectLink: 'GitHub/deployed link to project'
    //     },
    //     {
    //         title: 'Python Project 2',
    //         description: 'Project description',
    //         utilizes: ['Techniques', 'the', 'project', 'utilizes'],
    //         projectLink: 'GitHub/deployed link to project'
    //     },
    //     {
    //         title: 'Python Project 3',
    //         description: 'Project description',
    //         utilizes: ['Techniques', 'the', 'project', 'utilizes'],
    //         projectLink: 'GitHub/deployed link to project'
    //     }
    // ];

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
            case 'EFA':
                console.log('Setting EFA projects');
                setProjects(efaProjects);
                break;  
            // case 'Python':
            //     console.log('Setting Python projects');
            //     setProjects(pythonProjects);
            //     break;
            default:
                break;
        }
    }

    useEffect(() => determineProjectsToLoad(), [projectLanguage]);
 
    return(
            <Row>
                <Col className='text-center' xs='12'>
                    <h3>The selected project language is: {projectLanguage}</h3>
                </Col>
                {projects.map((project) => <Project title={project.title} description={project.description} utilizes={project.utilizes} projectLink={project.projectLink} />)}
            </Row>
    );
}

export default ProjectList;