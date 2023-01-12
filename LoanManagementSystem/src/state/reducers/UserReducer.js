const reducer = (userDetails = {}, action) => {
    switch (action.type) {
        case 'GET_USER':
            userDetails = action.payload;
            return (userDetails);    
        default:
            return userDetails;
    }
}

export default reducer;