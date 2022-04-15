import axios from "axios";
import { 
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILUR} from "./types";

export const fetchData = ()=>{
    return{
        type: FETCH_DATA_REQUEST
    }
}
export const fetchSucessed = (users)=>{
    return{
        type: FETCH_DATA_SUCCESS,
        payload: users
    }
}
export const fetchfailed = (message)=>{
    return{
        type: FETCH_DATA_FAILUR,
        payload : message
    }
}

export const fetchUser = ()=>{
    return (dispatch)=>{
        dispatch(fetchData())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(result =>{
        const users=result.data
        dispatch(fetchSucessed(users))})
    .catch(error =>{
        const errorMsg= error.message
        dispatch(fetchfailed(errorMsg))
    })
    }    
}