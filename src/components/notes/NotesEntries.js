import React from "react";
import {NotesEntrie} from "./NotesEntrie";
import {useSelector} from "react-redux";

export const NotesEntries = () => {

    const {notes} = useSelector(state => state.notes);

    return (
        <div className="notes__entries">
            {notes.map(note => {
                return (
                    <NotesEntrie
                        key={note.id}
                        {...note}
                    />
                )
            })

            }
        </div>
    )
}