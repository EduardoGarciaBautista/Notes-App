import React from "react";
import moment from "moment";
import {useDispatch} from "react-redux";
import {activateNote} from "../../actions/notes";


export const NotesEntrie = ({body, title, date, id, url}) => {

    const noteDate = moment(date);

    const dispatch = useDispatch();


    const handleSetActive = (e) => {
        e.preventDefault();
        dispatch(activateNote(id, {
            id,
            title,
            body,
            date,
            url
        }))
    }

    return (
        <div className="notes__entry pointer" onClick={handleSetActive}>
            {url &&
            <div className="notes__entry-picture"
                 style={{
                     backgroundSize: 'cover',
                     backgroundImage: `url(${url})`
                 }}
            />
            }
            <div className="notes__entry-body">
                <p className="notes__entry-title">
                    {title}
                </p>
                <p className="notes__entry-conten">
                    {body}
                </p>
            </div>
            <div className="notes__entry-date-box">
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('Do')}</h4>
            </div>
        </div>
    )

}