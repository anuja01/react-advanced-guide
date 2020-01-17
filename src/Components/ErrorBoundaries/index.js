import React from 'react'

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }

    // set the state to render the placeholder component for errors
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    // use for logging
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ color: 'red' }}>Error!! Please try again</div>
            )
        }
        return this.props.children;
    }
}
class ErrorBoundariySample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    render() {
        return (
            <div>Error Boundary Example{this.props.bt.nannn}</div>
        )
    }
}

export default ErrorBoundariySample;