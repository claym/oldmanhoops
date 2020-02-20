import React from "react";
import { useEffect, useState } from "react";

import { Hub } from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';

import { Authenticator, SignUp } from "aws-amplify-react";

import Home, {AuthenticatedHome} from "./Home";
import { AuthContext } from "./components/user/AuthContext";
import { LoginContext } from "./components/user/LoginContext";


const App = () => {
    let [login, setLogin] = useState(false);
    let [user, setUser] = useState(null);
    useEffect(() => {
        let updateUser = async (authState) => {
            console.log("AuthState: ", authState);

            if (authState?.payload?.event === "signOut") {
                setLogin(false);
            }

            Auth.currentAuthenticatedUser()
                .then((currentUser) => {
                    setUser(currentUser);
                    console.log("CurrentUser: ", currentUser);
                })
                .catch((err) => {
                    setUser(null);
                });
        };
        Hub.listen("auth", updateUser); // listen for login/signup events
        updateUser(); // check manually the first time because we won't get a Hub event
        return () => Hub.remove("auth", updateUser); // cleanup
    }, []);


    console.log('login: ', login);
    return (
        <LoginContext.Provider value={{login, setLogin}}>
            <AuthContext.Provider value={user}>
                { user || login ? <AuthenticatedHome/> : <Home /> }
            </AuthContext.Provider>
        </LoginContext.Provider>
    );
};

export default App;
//export default withAuthenticator(App, { includeGreetings: true })
