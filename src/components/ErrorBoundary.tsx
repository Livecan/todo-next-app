import React, { Component, PropsWithChildren } from "react";

class ErrorBoundary extends Component<PropsWithChildren<{}>> {
  state: {
    hasError?: boolean;
    error?: Error;
  };

  constructor(props: PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      console.error(this.state.error);
      // You can render any custom fallback UI
      return <h1>Oops, something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
