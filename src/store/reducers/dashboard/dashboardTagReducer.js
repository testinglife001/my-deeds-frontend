
const tagState = {
    loader: false,
    tagError: '',
    tagSuccessMessage: '',
    allTag: [],
    perPage: 0,
    tagCount: 0,
    editTag: '',
    editRequest: false
}

export const dashboardTagReducer = (state=tagState, action) => {
    const {payload, type} = action;
    if(type === 'SET_LOADER'){
        return {
            ...state,
            loader: true
        }
    }
    if(type === 'TAG_ADD_SUCCESS' || type === 'TAG_DELETE_SUCCESS' || type === 'TAG_UPDATE_SUCCESS'){
        return {
            ...state,
            loader: false,
            tagSuccessMessage: payload.successMessage,
            tagError: ''
        }
    }
    if(type === 'DASHBOARD_TAG_GET_SUCCESS') {
        // console.log(payload);
        return {
            ...state,
            allTag: payload.allTag,
            perPage: payload.perPage,
            tagCount: payload.tagCount
        }
    }
    
    if(type === 'TAG_SUCCESS_MESSAGE_CLEAR'){
        return {
            ...state,
            tagSuccessMessage: ''
        }
    }
    
    if(type === 'TAG_ERROR_MESSAGE_CLEAR'){
        return {
            ...state,
            tagError: ''
        }
    }
    if(type === 'TAG_ADD_FAIL' || type === 'TAG_UPDATE_FAIL'){
        return {
            ...state,
            loader: false,
            tagError: payload.error,
            tagSuccessMessage: ''
        }
    }
    if(type === 'EDIT_TAG_GET_SUCCESS') {
        return {
            ...state,
            editTag: payload.editTag 
        }
    }
    if(type === 'EDIT_REQUEST_SET') {
        return {
            ...state,
            editRequest: true
        }
    }
    if(type === 'EDIT_REQUEST_CLEAR') {
        return {
            ...state,
            editRequest: false
        }
    }
    return state;
}
    
