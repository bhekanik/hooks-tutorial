import { ChangeEvent, Component, FC } from "react";
import { Card } from "./Card";
import { Row } from "./Row";

export class Greeting extends Component {
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
      <Card desc="Classes">
        <Row label="name">
          <input value={name} onChange={this.handleNameChange} />
        </Row>
        <Row label="surname">
          <input value={surname} onChange={this.handleSurnameChange} />
        </Row>
      </Card>
    );
  }
}

export default Greeting;
