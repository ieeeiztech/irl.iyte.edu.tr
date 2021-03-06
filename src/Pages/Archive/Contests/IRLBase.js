import React from 'react'
import { Accordion, Card } from 'react-bootstrap'

export default class IRLBase extends React.Component {
  render() {
    const suffix = {
      1: "st",
      2: "nd",
      3: "rd"
    }
    
    const changeURL = () => {
      window.location.hash = this.props.contestNo + (suffix[this.props.contestNo % 10] || "th");
    }

    return (
      <>
        <Card>
          <Accordion.Toggle 
            as={ Card.Header } 
            eventKey={ "irl" + this.props.contestNo } 
            style={{ cursor: "pointer" }}
            onClick={ changeURL }
          >
            { "IRL'" + this.props.year.substring(2) }
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={ "irl" + this.props.contestNo }>
            <Card.Body>
              { this.props.children }
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </>
    )
  }
}