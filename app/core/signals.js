import setUser from './actions/setUser.js';
import setModule from './actions/setModule.js';
import checkModuleExists from './actions/checkModuleExists.js';
import { redirect } from 'cerebral-router';

export default [
    [
        'coreAppMounted',
        [ 
            setUser,
            function (input, state, output, services) {
                services.router.trigger();
            }
        ]
    ],
    [
        'coreNavigatedToModule',
        [ checkModuleExists, {
            success: [setModule],
            error: [redirect('/')]
        } ]
    ],
    [
        'coreNavigatedHome',
        [ setModule ]
    ],
    [
        'dashboardMounted',
        [ () => { console.log('dashboardMounted') } ]
    ],
    [
        'loginNavigated',
        [ () => { console.log('loginNavigated') } ]
    ],
    [
        'logoutNavigated',
        [ () => { console.log('logoutNavigated') } ]
    ],
    [
        'signupNavigated',
        [ () => { console.log('signupNavigated') } ]
    ],
    [
        'someListNavigated',
        [ () => { console.log('someListNavigated') } ]
    ],
    [
        'someListItemNavigated',
        [ ({ id }) => { console.log('someListItemNavigated: %s', id) } ]
    ]
];
