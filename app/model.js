import { monkey } from 'cerebral-baobab';

export default {
    modules: {},
    activeModule: {
        name: 'core',
        ref: monkey(
            ['modules'],
            ['activeModule', 'name'],
            (modules, activeModule) => { 
                return modules[activeModule] || {}
            }
        )
    }
}
