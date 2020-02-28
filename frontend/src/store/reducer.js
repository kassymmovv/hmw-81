import {GET_URLS, POST_URLS} from "./actions";

const initialState = {
  url:'',
    error:''
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_URLS:
            return {
                ...state,
                url: action.url
            };
        case GET_URLS:
            return {
                ...state,
                error: action.error
            };

        default:
            return state;
    }
};

export default Reducer;