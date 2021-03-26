import { ChangeEvent, Component } from "react";
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
    width: 0,
  };

  handleResize = () => this.setState({ width: window.innerWidth });

  componentDidMount() {
    const { setTitle } = this.props;
    const { name, surname } = this.state;
    setTitle(`${name} ${surname}`);
    this.setState({ width: window.innerWidth });

    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    const { setTitle } = this.props;
    const { name, surname } = this.state;
    setTitle(`${name} ${surname}`);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value });
  };

  handleSurnameChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ surname: event.target.value });
  };

  render() {
    const { name, surname, width } = this.state;

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
            <Row label="width">{width}</Row>
          </Card>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Greeting;
