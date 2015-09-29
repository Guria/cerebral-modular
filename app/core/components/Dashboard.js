import React from 'react';
import { Decorator as Cerebral } from 'cerebral-react';

@Cerebral({
    'modules': ['modules']
})
class Dashboard extends React.Component {
    componentWillMount() {
        this.props.signals.dashboardMounted();
    }
    render() {
        const modules = Object.keys(this.props.modules);
        const renderModule = (moduleName, i) => {
            const clickHandler = () => { this.props.signals.coreNavigatedToModule({
                    module: moduleName === 'core'? undefined : moduleName
                }) };
            return (
                <li key={i} onClick={ clickHandler }>
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

export default Dashboard;
