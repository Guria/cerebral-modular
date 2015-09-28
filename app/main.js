import React from 'react';
import ReactDOM from 'react-dom';

import Model from 'cerebral-baobab';
import Controller from 'cerebral';

import { Container } from 'cerebral-react';
import CoreApp from './core/components/CoreApp.js';
import initialState from './model.js';

const modules = {
    core: require("./core/"),
    todomvc: require("./modules/todomvc/")
};

let signals = [];

Object.keys(modules).forEach((moduleName) => {
    // state, signals, routes, rootComponent
    initialState.modules[moduleName] = modules[moduleName].initialState || {};
    signals = signals.concat(modules[moduleName].signals || []);
});

let model = Model(initialState);
let controller = Controller(model);

signals.forEach((signal) => {
    controller.signal(...signal);
});

const root = document.body.appendChild(document.createElement('div'));

ReactDOM.render(
    <Container controller={ controller }>
        <CoreApp>
            <CoreApp.Dashboard />
        </CoreApp>
    </Container>,
    root);
