import React from 'react';
import ErrorIndicator from '../app-error-indicator/error-indicator';

export default class ErrorWrapper extends React.Component{
    state = {
        wasError: false
    }

    componentDidCatch() {
        this.setState({wasError: true})
    }

    render() {
        if (this.state.wasError) {
            return <ErrorIndicator/>
        }

        return this.props.children
    }
}