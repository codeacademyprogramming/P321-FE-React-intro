import React from "react";

export class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
    };
  }

  componentDidCatch(err) {
    this.setState({ error: err });
  }

  render() {
    return (
      <>
        {this.props.children}
        {this.state.error && (
          <div className="errorElement">{String(this.state.error)}</div>
          // <div className="errorElement">{this.state.error.toString()}</div>
        )}
      </>
    );
  }
}
