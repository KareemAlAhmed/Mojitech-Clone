import { 
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILUR} from "./types";

const initialState ={
    loading: false,
    data:[],
    error:""
}

export const reducer = (state=initialState, action)=>{
    switch(action.type){
        case FETCH_DATA_REQUEST: return{
            loading: true,
            data:[],
            error:""
        }
        case FETCH_DATA_SUCCESS: return{
            loading: false,
            data:action.payload,
            error:""
        }
        case FETCH_DATA_FAILUR: return{
            loading: false,
            data:[],
            error: action.payload
        }

        default : return state
    }
}