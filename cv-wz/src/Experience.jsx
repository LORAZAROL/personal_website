/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid';
import { Accordion, Badge } from 'react-bootstrap';
import * as Content from './Content';

function Experience( {position, organization, location, description} ) {
    return (
        <div>
            <h3> {position!==null && position} | {organization} | {location} </h3>
            { 
                description.map((desc) => <li key={uuidv4()}> {desc} </li>)
            }
        </div>
    )
}

function Education(props){
    return (
      <div>
        <h3>{props.degree} | { props.schoolName } </h3>
        <li key={props.schoolName}>{ props.content }</li>
      </div>
    )
  }

export function Experiences () {
    return (
        <>
        <Accordion defaultActiveKey="0">

            <Accordion.Item eventKey='0'>
            <Accordion.Header><span style={{marginRight: "20px"}}>2017.09 - 2022.05</span> <Badge bg="primary">Education</Badge></Accordion.Header>
            <Accordion.Body>
                <Education degree='Bachelor of software engineering' schoolName="McGill University"
                content="Core Courses: Object-Oriented Programming in Java, Fundamental of Computer Graphics and Animation, Software Engineering, Database Management" />
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='5'>
            <Accordion.Header><span style={{marginRight: "20px"}}>2020.01</span> <Badge bg="secondary">Extracurriculum Activity</Badge></Accordion.Header>
            <Accordion.Body>
                <Experience duration={Content.ggj2020.duration} position={Content.ggj2020.position} 
                organization={Content.ggj2020.organization} location={Content.ggj2020.location} 
                description={Content.ggj2020.description}>
                </Experience>
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='6'>
            <Accordion.Header><span style={{marginRight: "20px"}}>2021.01</span> <Badge bg="secondary">Extracurriculum Activity</Badge></Accordion.Header>
            <Accordion.Body>
                <Experience duration={Content.ggj2021.duration} position={Content.ggj2021.position} 
                organization={Content.ggj2021.organization} location={Content.ggj2021.location} 
                description={Content.ggj2021.description}>
                </Experience>
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1'>
            <Accordion.Header><span style={{marginRight: "20px"}}>2021.05 - 2022.01</span> <Badge bg="success">Work Experience</Badge></Accordion.Header>
                <Accordion.Body>
                <Experience duration={Content.unity.duration} position={Content.unity.position} 
                organization={Content.unity.organization} location={Content.unity.location} 
                description={Content.unity.description}>
                </Experience>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='2'>
            <Accordion.Header><span style={{marginRight: "20px"}}>2022.09 - 2023.06</span> <Badge bg="primary">Education</Badge></Accordion.Header>
                <Accordion.Body>
                <Education degree='Master of computer science' schoolName="City University of Hong Kong" 
                    content="Core Courses: Data Engineering, Fundamental of Machine Learning, Natural Language Processing, Computer Graphics, Virtual Reality Tech & Apps, Cloud Computing" />
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='3'>
            <Accordion.Header><span style={{marginRight: "20px"}}>2022.09 - 2022.12</span> <Badge bg="info">School Project</Badge></Accordion.Header>
                <Accordion.Body>
                <Experience duration={Content.fmt.duration} position={Content.fmt.position} 
                    organization={Content.fmt.organization} location={Content.fmt.location} 
                    description={Content.fmt.description}>
                </Experience>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='4'>
            <Accordion.Header><span style={{marginRight: "20px"}}>2023.07 - 2023.09</span> <Badge bg="success">Work Experience</Badge></Accordion.Header>
                <Accordion.Body>
                <Experience duration={Content.fe_kotoko.duration} position={Content.fe_kotoko.position} 
                    organization={Content.fe_kotoko.organization} location={Content.fe_kotoko.location} 
                    description={Content.fe_kotoko.description}>
                </Experience>
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
        </>
    )
}

