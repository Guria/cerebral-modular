import setUser from './actions/setUser.js';
import setModule from './actions/setModule.js';

export default [
    [
        'coreAppMounted',
        setUser
    ],
    [
        'coreNavigatedToModule',
        setModule
    ]
];
