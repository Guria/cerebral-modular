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

@Cerebral({
    'modules': ['modules']
})
class Dashboard extends React.Component {
    render() {
        const modules = Object.keys(this.props.modules);
        const renderModule = (moduleName, i) => {
            return (
                <li key={i} onClick={() => { this.props.signals.coreNavigatedToModule({
                    module: moduleName === 'core'? '' : moduleName
                }) } }>
                    { moduleName }
                </li>
            )
        }
        return (
            <div className="dashboard">
                <h2>Dashboard</h2>
                <h3>Installed Modules</h3>
                <ul>
                    { modules.map(renderModule) }
                </ul>
            </div>
        );
    }
}

CoreApp.Dashboard = Dashboard;

export default CoreApp
