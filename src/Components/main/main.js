import React, { Component } from "react";
import { Accordion, Icon, Container, Button } from "semantic-ui-react";
import PatientForm from "../patientForms/patientForms";
import "./main.css";
import ClinicalConditionForm from "../clinicalConditionForms/clinicalCondition";

class Main extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Container>
        <Accordion className="accordion">
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Quadro Clínico
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <ClinicalConditionForm />
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Dados Paciente
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <PatientForm />
          </Accordion.Content>
        </Accordion>

        <Button type="submit" icon="hospital">
          Buscar Hospital
        </Button>
      </Container>
    );
  }
}

export default Main;
