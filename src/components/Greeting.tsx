import React, { ChangeEvent, Component } from "react";
import { Card } from "./Card";
import { Row } from "./Row";
import { ThemeContext } from "../contexts/ThemeContext";
import { DocumentTitle } from "../renderProps/DocumentTitle";
import { withWindowWidth, WithWindowWidthProps } from "../hoc/withWindowWidth";

interface OwnProps {
  setTitle: (newTitle: string) => void;
}

type Props = OwnProps & WithWindowWidthProps;

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
    const { setTitle, width } = this.props;

    return (
      <DocumentTitle
        title={`${name} ${surname}`}
        setTitle={setTitle}
        render={() => (
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
        )}
      />
    );
  }
}

export default withWindowWidth(Greeting);
