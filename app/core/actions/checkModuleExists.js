function checkModuleExists({ module = 'core'}, state, output) {
    
    if (Object.keys(state.get(['modules'])).indexOf(module) >= 0) {
        output.success()
    } else {
        output.error();
    }
}

export default checkModuleExists;
