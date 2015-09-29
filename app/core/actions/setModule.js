function setModule({ module = 'core' }, state) {
    state.set(['activeModule'], module);
}

export default setModule;
