import { ChangeEvent, Component, FC } from "react";
import { Card } from "./Card";
import { Row } from "./Row";
import { ThemeContext } from "../contexts/ThemeContext";

interface Props {
  setTitle: (newTitle: string) => void;
}

export class Greeting extends Component<Props> {
  state = {
    name: "Tony",
    surname: "Stark",
  };

  handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value });
  };

  handleSurnameChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ surname: event.target.value });
  };

  render() {
    const { name, surname } = this.state;

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Card desc="Classes" theme={theme}>
            <Row label="name">
              <input value={name} onChange={this.handleNameChange} />
            </Row>
            <Row label="surname">
              <input value={surname} onChange={this.handleSurnameChange} />
            </Row>
          </Card>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Greeting;
