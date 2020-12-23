import React, {useEffect, useRef} from "react";
import {NotesAppBar} from "./NotesAppBar";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "../../hooks/useForm";
import {activateNote} from "../../actions/notes";

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const {active: activeNote} = useSelector(state => state.notes);

    const [form, handleInputChange, reset] = useForm(activeNote)

    const {body, title} = form;

    const activeId = useRef(activeNote.id);

    useEffect(() => {
        if (activeNote.id !== activeId.current) {
            reset(activeNote);
            activeId.current = activeNote.id;
        }
    }, [activeId, reset, activeNote]);

    useEffect(() => {
        dispatch(activateNote(form.id, {...form}));
    }, [form, dispatch])

    return (
        <div className="note__main-content">
            <NotesAppBar/>
            <div className="note__content">

                <input
                    placeholder="Some awesome title"
                    className="note__title-input"
                    type="text"
                    autoComplete="off"
                    value={title}
                    name={"title"}
                    onChange={handleInputChange}
                />
                <textarea
                    name={"body"}
                    value={body}
                    onChange={handleInputChange}
                    className="note__textarea"
                    placeholder="What appened today?">
                    </textarea>

                {activeNote.url &&
                <div className="note__image">
                    <img
                        src={activeNote.url}
                        alt="goku"/>
                </div>
                }

            </div>
        </div>
    )
}