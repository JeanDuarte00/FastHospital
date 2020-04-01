import React, { Component } from "react";
import { Container, Divider, Accordion, Button, Icon } from "semantic-ui-react";
import ClinicalConditionForm from "../../../Components/clinicalConditionForms/clinicalCondition";
import PatientForms from "../../../Components/patientForms/patientForms";

class Home extends Component {
  state = { activeIndex: 0, activePage: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

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
        <Divider />

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
            <PatientForms />
          </Accordion.Content>
        </Accordion>

        <Divider />

        <Button type="submit" icon="hospital">
          Buscar Hospital
        </Button>
      </Container>
    );
  }
}

export default Home;
