import React from "react";
import {Sidebar} from "./Sidebar";
import {NoteScreen} from "../note/NoteScreen";

export const NotesScreen = () => {
    return(
        <div className="notes__main-content">
            <Sidebar/>
            <main>
                {/*<NothingSelected/>*/}
                <NoteScreen/>
            </main>
        </div>
    )
}