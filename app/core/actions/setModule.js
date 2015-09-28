function setModule({ module = 'core' }, state) {
    state.set(['activeModule', 'name'], module);
}

export default setModule;
