import { singInWithGoogle } from "../../firebase/providers"
import { login,checkingCredentials} from "./authSlice"

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        //const action = { email: email, password: password }
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn =()=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
        const result = singInWithGoogle()
    }
}