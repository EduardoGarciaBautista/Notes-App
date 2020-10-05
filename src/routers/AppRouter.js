import React, {useEffect, useState} from "react";
import {AuthRouter} from "./AuthRouter";
import {NotesScreen} from "../components/notes/NotesScreen";
import {BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import {firebase} from "../firebase/firebase-config";
import {useDispatch} from "react-redux";
import {login} from "../actions/auth";
import {PublicRoutes} from "./PublicRoutes";
import {PrivateRoutes} from "./PrivateRoutes";


export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking]);

    if (checking) {
        return <div>
            <h3>Espere...</h3>
        </div>
    }
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes
                        path="/auth"
                        component={AuthRouter}
                        isLoggedIn={isLoggedIn}
                    />
                    <PrivateRoutes
                        exact
                        path="/"
                        component={NotesScreen}
                        isLoggedIn={isLoggedIn}
                    />
                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
        </Router>
    )
}