import * as types from './actionTypes';
import axios from 'axios';


export const authStart = () => {
    return {
        type: types.AUTH_START
    };
}

export const authSuccess = (token, data) => {
    return {
        type: types.AUTH_SUCCESS,
        token: token,
        data: data
    };
}

export const authFail = (error) => {
    return {
        type: types.AUTH_FAIL,
        error: error
    };
}

// function handleSignup(){
//     return (
//         (dispatch)=>{
//             axios.post("https://instagram-express-app.vercel.app/api/auth/signup")
//         }
//     )
// }