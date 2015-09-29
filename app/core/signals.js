import setUser from './actions/setUser.js';
import setModule from './actions/setModule.js';
import checkModuleExists from './actions/checkModuleExists.js';
import { redirect } from 'cerebral-router';

export default [
    [
        'coreAppMounted',
        setUser
    ],
    [
        'coreNavigatedToModule',
        checkModuleExists, {
            success: [setModule],
            error: [redirect('/')]
        }
    ],
    [
        'dashboardMounted',
        () => { console.log('dashboardMounted') }
    ]
];
