import React, {useContext} from "react";

import Auth from '@aws-amplify/auth';

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { AuthContext } from "./user/AuthContext";
import { LoginContext } from "./user/LoginContext";

export default () => {
    const user = useContext(AuthContext);

    return (
        <Typography variant="body2" color="textSecondary" align="center">
            <Link href="mailto:oldmanhoops@oldmanhoops.net">Need Help?</Link> {"Copyright © "}
            <Link color="inherit" href="mailto:clay@pfd.net">
                Clay Mitchell
            </Link>{" "}
            {new Date().getFullYear()}
            {". "}
            <LoginLogout user={user} />
            {"."}
        </Typography>
    );
};

const LoginLogout = (props) => {
    const { setLogin } = useContext(LoginContext);
    const logout = (event) => {
        event.preventDefault();
        console.log("logging out");
        Auth.signOut()
            //.then((data) => console.log(data))
            .catch((err) => console.log(err));
    };

    if (!props.user) {
        return (
            <Link href="#" onClick={(event) => {event.preventDefault(); setLogin(true)}}>
                Login
            </Link>
        );
    }

    return (
        <Link href="#" onClick={logout}>
            Logout
        </Link>
    );
};
