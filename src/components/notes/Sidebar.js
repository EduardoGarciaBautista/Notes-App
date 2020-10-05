import React from "react";
import {NotesEntries} from "./NotesEntries";
import {useDispatch} from "react-redux";
import {startLogOut} from "../../actions/auth";

export const Sidebar = () => {

    const dispatch = useDispatch();

    const handleLogOut = (e) => {
        e.preventDefault();
        dispatch(startLogOut());

    }
    return(
        <aside className="notes__sidebar">
            <div className="notes__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"/>
                    <span> Eduardo</span>
                </h3>

                <button
                    onClick={handleLogOut}
                    className="btn">
                    Log Out
                </button>
            </div>
            <div className="notes__new_entry">
                <i className="far fa-calendar-plus fa-5x"/>
                <p className="mt-5">New entry</p>
            </div>

            <NotesEntries/>
        </aside>
    )
}