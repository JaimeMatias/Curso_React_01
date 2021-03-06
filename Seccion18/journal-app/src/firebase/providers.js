import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
export const singInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        // console.log({credentials});
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName,
             email,
              photoURL, 
              uid
        }

    } catch (error) {
        console.log(`Se produjo el siguiente error: ${error}`);
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok:false,
            errorCode,
            errorMessage
        }
    }



}