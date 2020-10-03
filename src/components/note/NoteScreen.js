import React from "react";
import {NotesAppBar} from "./NotesAppBar";

export const NoteScreen = () => {
    return (
        <div className="note__main-content">
            <NotesAppBar/>
            <div className="note__content">

                <input
                    placeholder="Some awesome title"
                    className="note__title-input"
                    type="text"
                    autoComplete="off"
                />
                <textarea
                    className="note__textarea"
                    placeholder="What appened today?">
                    </textarea>

                <div className="note__image">
                    <img
                        src="https://imagenesgamers.canalrcn.com/ImgTodoGamers/goku_curiosidades_0.jpg"
                        alt="goku"/>
                </div>

            </div>
        </div>
    )
}