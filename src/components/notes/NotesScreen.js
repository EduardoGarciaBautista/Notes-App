import React from "react";
import {Sidebar} from "./Sidebar";
import {NoteScreen} from "../note/NoteScreen";
import { useSelector } from "react-redux";
import NothingSelected from "./NothingSelected";

export const NotesScreen = () => {

    const {active} = useSelector(state => state.notes);

    return(
        <div className="notes__main-content">
            <Sidebar/>
            <main>
                {active ? 
                    <NoteScreen/>: <NothingSelected/>
                }
            </main>
        </div>
    )
}