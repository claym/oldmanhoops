import React from "react";
import { useEffect, useState } from "react";

import { Auth, Hub } from "aws-amplify";

import { withAuthenticator } from "aws-amplify-react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Home from "./Home";
import { AuthContext } from "./components/user/AuthContext";

const App = () => {
    let [user, setUser] = useState(null);

    useEffect(() => {
        let updateUser = async (authState) => {
            try {
                //let user = await Auth.currentAuthenticatedUser();
                //setUser(user)
                Auth.currentCredentials().then((currentUser) => {
                    setUser(currentUser);
                });
            } catch {
                setUser(null);
            }
        };
        Hub.listen("auth", updateUser); // listen for login/signup events
        updateUser(); // check manually the first time because we won't get a Hub event
        return () => Hub.remove("auth", updateUser); // cleanup
    }, []);

    const Login = () => {
        return <Redirect to="/" />;
    };

    const WithAuthComponent = withAuthenticator(Login);

    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <WithAuthComponent />
                </Route>
                <AuthContext.Provider value={user}>
                    <Route path="/">
                        <Home />
                    </Route>
                </AuthContext.Provider>
            </Switch>
        </Router>
    );
};

export default App;
//export default withAuthenticator(App, { includeGreetings: true })
