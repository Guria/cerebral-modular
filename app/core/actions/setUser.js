function setUser({ modulePath = ['modules', 'core'] }, state) {
    state.set([...modulePath, 'user', 'FullName'], 'User Full Name');
}

export default setUser;
