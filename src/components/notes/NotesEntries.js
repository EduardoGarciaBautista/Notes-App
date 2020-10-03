import React from "react";
import {NotesEntrie} from "./NotesEntrie";

export const NotesEntries = () => {

    const entries = [1,2,3,4,5,6,7,8,9];
    return(
        <div className="notes__entries">
            {entries.map(value => {
                return(
                    <NotesEntrie key={value} />
                )
            })

            }
        </div>
    )
}