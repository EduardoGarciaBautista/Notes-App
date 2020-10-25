import { db } from "../firebase/firebase-config";
import { types } from "../types/types";

export const startNewNote =  (payload) => {
    return async (dispatch, getState) => {

        const {auth:{uid}} = getState();
        console.log(uid);
        const newNote = {
            title: '',
            body: '',
            date:  new Date().getTime()
        };

        const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
        console.log(docRef);

        dispatch(activateNote(docRef.id, newNote));


    }
}

export const activateNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})