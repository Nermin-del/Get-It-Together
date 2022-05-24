import React from 'react';
import { Button } from '../utils/Button';

const Reload = () => {
  window.location.reload();
}

 class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }

    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <div>
          <h1>Something went wrong.</h1>
          <Button onHandleClick={Reload}>Reload</Button>
          </div>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;