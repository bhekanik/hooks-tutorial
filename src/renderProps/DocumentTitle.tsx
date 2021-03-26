import { Component } from "react";

interface Props {
  title: string;
  setTitle: (newTitle: string) => void;
  render: () => JSX.Element;
}

export class DocumentTitle extends Component<Props> {
  componentDidMount() {
    const { title, setTitle } = this.props;
    setTitle(title);
  }

  componentDidUpdate() {
    const { title, setTitle } = this.props;
    setTitle(title);
  }

  render() {
    const { render } = this.props;
    return render();
  }
}
