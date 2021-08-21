//mostly from React docs
import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor() {
    super();
  }

  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h1>
          This listing has an error.
          <Link to="/">Click here</Link> to go back to the Home Page or wait
          five seconds.
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
