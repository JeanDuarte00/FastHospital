import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Main from "../Components/main/main";
import PatientForm from "../Components/patientForms/patientForms";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Container>
        <Main />
      </Container>
    </div>
  );
}

export default App;
