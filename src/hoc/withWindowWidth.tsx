import { Component } from "react";

export interface WithWindowWidthProps extends Record<string, unknown> {
  width: number;
}

interface State {
  width: number;
}

export const withWindowWidth = <T extends Record<string, unknown>>(
  WrappedComponent: React.ComponentType<T>
) =>
  class extends Component<T, State> {
    state = {
      width: 0,
    };

    handleResize = () => this.setState({ width: window.innerWidth });

    componentDidMount() {
      this.setState({ width: window.innerWidth });

      window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }

    render() {
      const { width } = this.state;

      return <WrappedComponent {...(this.props as T)} width={width} />;
    }
  };
