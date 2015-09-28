import React from 'react';
import { Decorator as Cerebral } from 'cerebral-react';
import Navbar from './Navbar.js';
import './CoreApp.css';

@Cerebral()
class CoreApp extends React.Component {
    componentDidMount() {
        this.props.signals.coreAppMounted();
    }
    render() {
        return (
            <div className="core-app">
                <Navbar />
                <div className="layout">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default CoreApp
