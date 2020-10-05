import {types} from "../types/types";
import {firebase, googleAuthProvider} from '../firebase/firebase-config'
import {finishLoading} from "./ui";
import Swal from 'sweetalert2'


export const starLoginEmailPassword = ({email, password}) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error',
                    text: error.message,
                    icon: 'error'
                });
            });
    }
}

export const startRegisterWithEmaiPassword = ({email, password, name}) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({user}) => {
                await user.updateProfile({displayName: name});
                console.log(user);
                dispatch(login(user.uid, user.displayName));
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error',
                    text: error.message,
                    icon: 'error'
                });
            });
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider).then(({user}) => {
            console.log(user);
            dispatch(login(user.uid, user.displayName));
        });
    }
}


export const startLogOut = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        logout();
    }
}

export const logout = () => ({
    type: types.logout
})

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {uid, displayName}
});