import setUser from './actions/setUser.js';
import setModule from './actions/setModule.js';

export default [
    [
        'coreAppMounted',
        setUser,
        setModule
    ],
    [
        'coreNavigatedToModule',
        setModule
    ]
];
