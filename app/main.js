import React from 'react';
import ReactDOM from 'react-dom';
import Model from 'cerebral-baobab';
import Controller from 'cerebral';
import { Container } from 'cerebral-react';
import Router from 'cerebral-router';
import CoreApp from './core/components/CoreApp.js';
import objectAssign from 'object-assign';
import initialState from './model.js';

const modules = {
    core: require("./core/"),
    simpletodo: require("./modules/simpletodo/")
};

let signals = [],
    routes = {};

Object.keys(modules).forEach((moduleName) => {
    let module = modules[moduleName];
    initialState.modules[moduleName] = module.initialState || {};
    signals = signals.concat(module.signals || []);
    objectAssign(routes, module.routes);
});

let model = Model(initialState);
let controller = Controller(model);

signals.forEach((signal) => {
    controller.signal(...signal);
});

Router(controller, routes, {
    onlyHash: true
});

const root = document.body.appendChild(document.createElement('div'));

const activeModuleCursor = model.tree.select(['activeModule']);
activeModuleCursor.on('update', render);
render();

function render(){
    const activeModule = modules[activeModuleCursor.get('name')];
    const rootComponent = activeModule.rootComponent?
        React.createElement(activeModule.rootComponent) :
        <div />;

    ReactDOM.render(
        <Container controller={ controller }>
            <CoreApp>
                { rootComponent }
            </CoreApp>
        </Container>,
        root);
}