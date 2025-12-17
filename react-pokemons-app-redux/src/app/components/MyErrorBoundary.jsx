import { Component } from 'react';

export class MyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    return { errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error('Error caught by MyErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.errorMessage) {
      return (
        <>
          <h1>Something went wrong: {this.state.errorMessage}</h1>

          <button onClick={() => this.setState({ errorMessage: '' })}>
            Try Again
          </button>
        </>
      );
    }

    return this.props.children;
  }
}
