export const initialState = {
    modules: {},
    activeModule: 'core'
};

export const computedState = {
    modules: {},
    activeModule: function (get) {
        return get(['modules', get(['activeModule'])]);
    }
}
