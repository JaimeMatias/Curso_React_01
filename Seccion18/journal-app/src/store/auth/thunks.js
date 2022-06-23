import { singInWithGoogle } from "../../firebase/providers"
import { login, checkingCredentials, logout } from "./authSlice"

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        //const action = { email: email, password: password }
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await singInWithGoogle()
      
        if (!result.ok) return dispatch(logout(result.errorMessage))
        dispatch(login(result))
        console.log('Termino correctamente')
    }
}