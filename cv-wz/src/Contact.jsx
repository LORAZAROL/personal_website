import { Button } from "react-bootstrap"
import resume from "./assets/weijing_zhang_resume.pdf"

export function Contact() {
    return (
        <div id="contact">
            <a id="linkedin" href="https://www.linkedin.com/in/weijing-zhang-91757b14a/" target="_blank" rel="noreferrer"> My LinkedIn profile </a>
            <Button id="resume" onClick={() => { window.open(resume) }}> Open my resume </Button>
        </div>
    )
}