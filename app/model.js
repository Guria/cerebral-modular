export const initialState = {
    modules: {},
    activeModule: 'core'
};

export const computedState = {
    modules: {},
    activeModule: function (get, moduleName) {
        return get(['modules', moduleName]);
    }
}
