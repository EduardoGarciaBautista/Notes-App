import {db} from "../firebase/firebase-config";
import {types} from "../types/types";
import {loadNotes} from "../helpers/loadNotes";
import Swal from "sweetalert2";

export const startNewNote = (payload) => {
    return async (dispatch, getState) => {

        const {auth: {uid}} = getState();
        console.log(uid);
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
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

export const startLoginNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes))
    }
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
})

export const saveNote = (note) => {
    return async (dispatch, getState) => {
        const {auth: {uid}} = getState();
        if (!note.url) {
            delete note['url'];
        }

        const noteToFirestore = {...note};
        delete noteToFirestore['id'];

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
        dispatch(updateNote(note.id, noteToFirestore));
        Swal.fire({
            title: note.title,
            icon: 'success'
        })
    }
}

export const updateNote = (id, note) => ({
    type: types.notesUpdate,
    payload: {id, note: {id, ...note}}
})