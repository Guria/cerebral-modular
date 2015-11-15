import React from 'react';
import { Decorator as Cerebral } from 'cerebral-react';
import Navbar from './Navbar.js';
import './CoreApp.css';

@Cerebral({
    activeModule: ['activeModule']
})
class CoreApp extends React.Component {
    componentWillMount() {
        this.props.signals.coreAppMounted();
    }
    renderComponent() {
        const module = this.props.modules[this.props.activeModule];
        if (!module) return `${this.props.activeModule} module doesn't exists`;
        const Component = this.props.modules[this.props.activeModule].rootComponent;
        if (!Component) return `${this.props.activeModule} module doesn't have rootComponent`;
        return React.createElement(Component);
    }
    render() {
        return (
            <div className="core-app">
                <Navbar />
                <div className="layout">
                    { this.renderComponent() }
                </div>
            </div>
        );
    }
}

export default CoreApp
