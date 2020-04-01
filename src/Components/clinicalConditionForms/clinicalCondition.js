import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class ClinicalConditionForm extends Component {
  state = {};
  opFebre = [
    { key: 1, text: "Baixa", value: "baixa" },
    { key: 2, text: "Ausente", value: "ausente" },
    { key: 3, text: "Superior a 37ºC", value: "alta" }
  ];
  opDorCabeça = [
    { key: 1, text: "Baixa", value: "baixa" },
    { key: 2, text: "Ausente", value: "ausente" },
    { key: 3, text: "Moderada", value: "moderada" },
    { key: 4, text: "Intensa", value: "intensa" }
  ];
  opCalafrios = [
    { key: 1, text: "Raros", value: "raro" },
    { key: 2, text: "Variável", value: "variavel" }
  ];
  opCansaco = [
    { key: 1, text: "Leve", value: "leve" },
    { key: 2, text: "Moderado", value: "moderado" },
    { key: 3, text: "Intenso", value: "intenso" }
  ];
  opTosse = [
    { key: 1, text: "Leve", value: "leve" },
    { key: 2, text: "Moderado", value: "moderado" },
    { key: 3, text: "Intenso", value: "intenso" }
  ];
  opDorGarganta = [
    { key: 1, text: "Intensa", value: "intensa" },
    { key: 2, text: "Moderado", value: "moderado" }
  ];

  render() {
    return (
      <Form>
        <Form.Group widths="2">
          <Form.Field>
            <label>Febre</label>
            <Form.Dropdown clearable options={this.opFebre} selection />
          </Form.Field>

          <Form.Field>
            <label>Dor de Cabeça</label>
            <Form.Dropdown clearable options={this.opDorCabeça} selection />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="2">
          <Form.Field>
            <label>Calafrios</label>
            <Form.Dropdown clearable options={this.opCalafrios} selection />
          </Form.Field>

          <Form.Field>
            <label>Cansaço</label>
            <Form.Dropdown clearable options={this.opCansaco} selection />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="2">
          <Form.Field>
            <label>Dor de Garganta</label>
            <Form.Dropdown clearable options={this.opDorGarganta} selection />
          </Form.Field>

          <Form.Field>
            <label>Tosse</label>
            <Form.Dropdown clearable options={this.opTosse} selection />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Anotações</label>
            <Form.TextArea></Form.TextArea>
          </Form.Field>
        </Form.Group>
      </Form>
    );
  }
}

export default ClinicalConditionForm;
