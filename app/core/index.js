import React from 'react';
import CoreApp from './components/CoreApp.js';

export { default as initialState } from './model.js';

export { default as signals } from './signals.js';

export const routes = {
    '/': 'coreAppMounted',
    '/:module': 'coreNavigatedToModule'
};

export function componentFactory() {
    return <CoreApp.Dashboard />;
}
