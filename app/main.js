import React from 'react';
import ReactDOM from 'react-dom';
import Model from 'cerebral-baobab';
import Controller from 'cerebral';
import { Container } from 'cerebral-react';
import Router from 'cerebral-router';
import CoreApp from './core/components/CoreApp.js';
import objectAssign from 'object-assign';
import { initialState, computedState } from './model.js';

const modules = {
    core: require("./core/"),
    simpletodo: require("./modules/simpletodo/")
};

let signals = [],
    routes = {};

Object.keys(modules).forEach((name) => {
    let module = modules[name];
    initialState.modules[name] = objectAssign({ name }, module.initialState);
    module.computedState && (computedState.modules[name] = module.computedState);
    signals = signals.concat(module.signals || []);
    objectAssign(routes, module.routes);
});

let model = Model(initialState);
let controller = Controller(model, {}, computedState);

signals.forEach((signal) => {
    controller.signal(...signal);
});

Router(controller, routes, {
    onlyHash: true
});

const root = document.body.appendChild(document.createElement('div'));

ReactDOM.render(
    <Container controller={ controller }>
        <CoreApp modules={ modules } />
    </Container>,
    root);

