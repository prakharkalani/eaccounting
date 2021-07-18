import React from 'react'
import './App.css'
import enquire from './img/enquire.webp'
import requirement from './img/requirement-analysis.webp'
import contract from './img/contract.webp'
import feedback from './img/feedback.png'
import project_initiation from './img/project initiation.webp'
import execution from './img/execution.webp'


function About() {
    return (
        <div>
            <div className="about-heading centre">Here to empower every SME</div>
      <div className="about-kgc">
        E-Accounting is a registered Accountancy firm. It is a team of
        professionals which provides unparalleled, personalized accounting,
        taxation & finance services to a broad range of clients across globe.
      </div>
      <div className="how-do-we-work-heading centre">HOW DOES IT WORK</div>
      <div className="steps">
        <div className="#### col clearfix col1 col2">
          <img src= {enquire} alt="contact-us-logo" className="img-size" />
          <h3 className="centre">Establish Contact</h3>
          The team contacts you as and when you fill the enquire form
        </div>
        <div className="#### col clearfix col1 col2">
          <img
            src={requirement}
            className="img-size"
            alt="requirement-analysis-logo"
          />
          <h3 className="centre">Requirement analysis</h3>
          High level detailed understanding of your requirement
        </div>
        <div className="#### col clearfix col2">
          <img src={contract} className="img-size" alt="contract-logo" />
          <h3 className="centre">Pricing & Contract</h3>
          Discussion with respect to pricing, scope and SLA sign off
        </div>
        <div className="#### col clearfix col1">
          <img
            src={project_initiation}
            className="img-size"
            alt="requirement-analysis-logo"
          />
          <h3 className="centre">Project initiation</h3>
          Project kick-off meeting, resource deployment & work initition
        </div>
        <div className="#### col clearfix col1">
          <img
            src={execution}
            className="img-size"
            alt="requirement-analysis-logo"
          />
          <h3 className="centre">Execution & reporting</h3>
          Projection execution, management, ongoing reporting
        </div>
        <div className="#### col clearfix col1">
          <img src={feedback} className="img-size" alt="feedback-logo" />
          <h3 className="centre">Feedback</h3>
          Ongoing feedback and quality improvement
        </div>
      </div>
        </div>
    )
}

export default About
