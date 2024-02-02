import './Skills.css'
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

function SkillHint() {
    return (
        <div id="skillHint" className='flex-container'> Skills </div>
    )
}

export function SkillTab() {

    // categories: program, game, ml, ide
    const [list, setList] = useState(program);

    return (
        <div id='skillTab'>
            <Nav variant="pills" defaultActiveKey="program" id='skillnav'
                onSelect={(selectedKey) => {
                    switch(selectedKey) {
                        case "program":
                            setList(program);
                            break;
                        case "game":
                            setList(game);
                            break;
                        case "ml":
                            setList(ml);
                            break;
                        case "ide":
                            setList(ide);
                            break; 
                    }
                }}
            >
                <Nav.Item style={{position: 'absolute', left: '20%', className: 'flex-container'}}>
                    <Nav.Link eventKey="program">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{position: 'absolute', left: '30%', className: 'flex-container'}}>
                    <Nav.Link eventKey="game">Game Development</Nav.Link>
                </Nav.Item>
                < SkillHint id="skillHint"/>
                <Nav.Item style={{position: 'absolute', right: '30%',  className: 'flex-container'}}>
                    <Nav.Link eventKey="ml">
                        Machine Learning
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item style={{position: 'absolute', right: '20%',  className: 'flex-container'}}>
                    <Nav.Link eventKey="ide">
                        IDEs & Tools
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            
            <div id="skillContent">
            {
                list.map((item) => <span key={item} className="skillItem">{item}</span>)
            }
            </div>
        </div>        
    )
}

const program = [
    'Java', // 0
    'C#', // 1
    'Python',   // 3
    'Typescript/javascript', // 4
]

const game = [
    'PIXI.js', // 4
    'Unity3D', // 1
    '2D art', // 5
    'Procreate' // 6
]

const ml = [
    'Tensorflow Keras', // 3
    'PyTorch', // 3
    'Natural language processing', // 3
    'SQL', // 2
]

const ide = [
    'IntelliJ', // 0
    'Eclipse', // 0
    'Unity3D', // 1
    'Visual Studio', // 1
    'Visual Studio Code', // 0
    'PyCharm', // 2
    'Jupyter', // 2
    'Git', // 0
    'SVN' // 1
]

