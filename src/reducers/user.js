const user = (state = {}, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                user : action.user
            }
        default: {
            return {
                ...state,
                user : {}
            }
        }
    }
};

export default user;