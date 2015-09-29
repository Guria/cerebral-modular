export { default as initialState } from './model.js';
export { default as signals } from './signals.js';
export { default as rootComponent } from './components/Dashboard.js';
export const routes = {
    '/logout': 'logoutNavigated',
    '/login': 'loginNavigated',
    '/signup': 'signupNavigated',
    '/someList': 'someListNavigated',
    '/someList/:id': 'someListItemNavigated',
    '/': 'coreNavigatedToModule',
    '/:module': 'coreNavigatedToModule'
};
