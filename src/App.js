import React from "react";
import { useEffect, useState, useMemo } from "react";

import { Auth, Hub } from "aws-amplify";

import { Authenticator, SignUp } from "aws-amplify-react";

import Home from "./Home";
import { AuthContext } from "./components/user/AuthContext";
import { LoginContext } from "./components/user/LoginContext";

const App = () => {
    let [login, setLogin] = useState(false);
    const value = useMemo(() => ({ login, setLogin }), [login, setLogin]);
    let [user, setUser] = useState(null);
    useEffect(() => {
        let updateUser = async (authState) => {
            try {
                Auth.currentCredentials()
                    .then((currentUser) => {
                        setUser(currentUser);
                    })
                    .then(() => {
                        if (authState?.payload?.event === "signIn") {
                            setLogin(false);
                        }
                    });
            } catch {
                setUser(null);
            }
        };
        Hub.listen("auth", updateUser); // listen for login/signup events
        updateUser(); // check manually the first time because we won't get a Hub event
        return () => Hub.remove("auth", updateUser); // cleanup
    }, []);

    if (login) {
        return <Authenticator hide={[SignUp]} />;
    }

    return (
        <LoginContext.Provider value={value}>
            <AuthContext.Provider value={user}>
                <Home />
            </AuthContext.Provider>
        </LoginContext.Provider>
    );
};

export default App;
//export default withAuthenticator(App, { includeGreetings: true })
