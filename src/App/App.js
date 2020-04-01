import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Main from "./pages/main/main";

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
