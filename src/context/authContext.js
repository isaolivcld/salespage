import { useContext, createContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";


const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const googleSingIn =()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)


    }
    return (
        <AuthContext.Provider value={{googleSingIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}