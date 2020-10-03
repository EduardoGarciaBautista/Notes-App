import React from "react";

export const NotesEntrie = () => {

    return (
        <div className="notes__entry pointer">
            <div className="notes__entry-picture"
                 style={{
                     backgroundSize: 'cover',
                     backgroundImage: `url(https://imagenesgamers.canalrcn.com/ImgTodoGamers/goku_curiosidades_0.jpg)`
                 }}
            />
            <div className="notes__entry-body">
                <p className="notes__entry-title">
                    Hola
                </p>
                <p className="notes__entry-conten">
                    ssssssssssssssssssssssssssssssssssssssss
                    saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    assssssssssss
                </p>
            </div>
            <div className="notes__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}