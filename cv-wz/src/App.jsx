/* eslint-disable react/prop-types */
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Experiences } from './Experience';
import { SkillTab } from './Skills';
import { Contact } from './Contact';

function GeneralInfo(){
  return (
    <div className='header'>
      <h1 className='name'> Weijing Zhang </h1>
      <h3 className='personalInfo'> Location: montreal, QC, Canada<br></br>Email: lorawzhang@outlook.com   Phone: 5149621550 </h3>
    </div>
  );
}

function App() {

  return (
    <>
      <GeneralInfo />
      <SkillTab/>
      <Experiences/>
      <Contact />
    </>
  )
}

export default App
