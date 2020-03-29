import React, { Component } from "react";
import { Button, Checkbox, Form, Container } from "semantic-ui-react";
import { Input } from "semantic-ui-react";

class PatientForm extends Component {
  state = {};

  clearFields;
  opGender = [
    { key: 1, text: "Masculino", value: "man" },
    { key: 2, text: "Feminino", value: "woman" }
  ];
  opTipoSanguineo = [
    { key: 1, text: "A", value: "a" },
    { key: 2, text: "B", value: "b" },
    { key: 3, text: "AB", value: "ab" },
    { key: 4, text: "O", value: "o" }
  ];

  render() {
    const { nome, idade, sexo, tipoSanguineo, altura, peso } = this.state;

    return (
      <Form onClear={this.clearFields}>
        <Form.Group widths="2">
          <Form.Field>
            <label>Nome</label>
            <Form.Input
              icon="user"
              placeholder="Nome Paciente"
              value={nome}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Sexo</label>
            <Form.Dropdown
              value={sexo}
              clearable
              options={this.opGender}
              selection
            />
          </Form.Field>
        </Form.Group>

        <Form.Group widths="2">
          <Form.Field>
            <label>Peso</label>
            <Form.Input
              type="number"
              icon="weight"
              placeholder="Peso do Paciente"
              value={peso}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Idade</label>
            <Form.Input
              type="number"
              icon="age"
              placeholder="Idade do Paciente"
              value={idade}
            />
          </Form.Field>
        </Form.Group>

        <Form.Group widths="2">
          <Form.Field>
            <label>Tipo Sanguineo</label>
            <Form.Dropdown
              clearable
              value={tipoSanguineo}
              options={this.opTipoSanguineo}
              selection
            />
          </Form.Field>
          <Form.Field>
            <label>Altura</label>
            <Form.Input
              type="number"
              value={altura}
              placeholder="Altura do Paciente"
            />
          </Form.Field>
        </Form.Group>
      </Form>
    );
  }

  handleChange = e => this.setState({ sexo: e });

  clearFields = () => this.setState({ nome: "", quadroClinico: "" });
}

export default PatientForm;
