const login = (email, password) => {
    return async (dispatch, getState, api) => {
        try {
            const user = await api.user.login(email, password);
        } catch(err) {
            console.error(err);
        }

        return dispatch({type: 'LOGIN', user: {id: 'test'}});
    }
};

const logout = () => ({
    type    : 'LOGOUT'
});

export default {
    login, logout
}