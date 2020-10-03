import React from "react";
import {Sidebar} from "./Sidebar";
import {NothingSelected} from "./NothingSelected";
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