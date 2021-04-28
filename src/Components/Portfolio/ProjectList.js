import { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';

import Project from './Project';

import GameStash from '../../Assets/Portfolio_GameStash.PNG';
import Doughlicious from '../../Assets/Portfolio_Doughlicious.JPG';
import StaticLayout from '../../Assets/Portfolio_StaticLayout.JPG';
import BookBubble from '../../Assets/Portfolio_BookBubble.JPG';
import Pokedex from '../../Assets/Portfolio_Pokedex.JPG';
import MovieSearch from '../../Assets/Portfolio_ReactMovieSearch.JPG';
import PizzaPlanetExress from '../../Assets/Portfolio_PizzaPlanetExpress.JPG';
import QuickNote from '../../Assets/Portfolio_QuickNote.JPG';
import RestaurantRater from '../../Assets/Portfolio_RestaurantRater.JPG';

import './portfolio.css';

const ProjectList = ({ projectLanguage }) => {
    const [projects, setProjects] = useState([]);

    const cSharpProjects = [
        {
            title: 'GameStash',
            projectImg: GameStash,
            description: 'N-tier MVC application with full CRUD functionality utilizing Entity Framework to create multiple data relationships across 6 custom data tables. Incorporated user authorization and authentication using Identity. Written in C# using Razor Pages for the user interface.',
            utilizes: ['C#', 'Entity Framework', 'Razor Pages', 'Bootstrap'],
            projectLink: 'https://github.com/spdwyer06/EFARedBadgeProject'
        },
        {
            title: 'Quick Note',
            projectImg: QuickNote,
            description: 'Custom api to easily keep track of notes.',
            utilizes: ['C#', '.NET Core', 'Dependancy Injection', 'n-tier'],
            projectLink: 'https://github.com/spdwyer06/QuickNote_Core'
        },
        {
            title: 'Restaurant Rater',
            projectImg: RestaurantRater,
            description: 'MVC Api to list, create, and rate restaurants.',
            utilizes: ['C#', 'Razor Pages', 'Api', 'MVC'],
            projectLink: 'https://github.com/spdwyer06/RestaurantRaterMVC'
        }
    ];

    const javaScriptProjects = [
        {
            title: 'Pokedex',
            projectImg: Pokedex,
            description: 'Make fetch calls to the Pokemon Api and display them in a user friendly interface.',
            utilizes: ['JS', 'HTML', 'CSS', 'DOM Manipulation'],
            projectLink: 'https://github.com/spdwyer06/PokeAPI'
        },
        {
            title: 'Movie Search',
            projectImg: MovieSearch,
            description: 'Makes a dynamic fetch call based on user input to the Movie Database Api and displays all movies along with the movie poster matching the user query.',
            utilizes: ['JS', 'React', 'Styled Components', 'Third-party Api'],
            projectLink: 'https://github.com/spdwyer06/MovieSearch_React'
        },
        {
            title: 'Pizza Planet Express',
            projectImg: PizzaPlanetExress,
            description: 'Full-stack application with 5 custom created data tables and a custom joining table.',
            utilizes: ['JS', 'React', 'TypeScript', 'react-router'],
            projectLink: 'https://github.com/spdwyer06/PizzaPlanetExpress_Server'
        }
    ];

    const efaProjects = [
        {
            title: 'Doughlicious',
            projectImg: Doughlicious,
            description: 'Collaborative project creating an Api pulling data from 4 custom tables created by separate developers to create a cohesive project.',
            utilizes: ['C#', 'Agile', 'Team Git', 'Web Api'],
            projectLink: 'https://github.com/spdwyer06/EFA-Blue-Badge-Project'
        },
        {
            title: 'Static Layout',
            projectImg: StaticLayout,
            description: 'My recreation of a professional company website.',
            utilizes: ['HTML', 'CSS', 'Bootstrap'],
            projectLink: 'https://github.com/spdwyer06/WDStaticLayout'
        },
        {
            title: 'Book Bubble',
            projectImg: BookBubble,
            description: 'Collaborative project creating a full-stack application.',
            utilizes: ['JS', 'React', 'Team Git'],
            projectLink: 'https://book-bubble.herokuapp.com/'
        }
    ];

    const allProjects = cSharpProjects.concat(javaScriptProjects, efaProjects);

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
            case 'ALL':
                console.log('Setting all projects');
                setProjects(allProjects);
                break;
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
                {/* <Col className='text-center' xs='12'>
                    <h3>The selected project language is: {projectLanguage}</h3>
                </Col> */}
                {projects.map((project) => <Project title={project.title} projectImg={project.projectImg} description={project.description} utilizes={project.utilizes} projectLink={project.projectLink} />)}
            </Row>
    );
}

export default ProjectList;