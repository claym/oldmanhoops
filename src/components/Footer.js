import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { AuthContext } from "./user/AuthContext";
import { useContext } from "react";
import { Auth } from "aws-amplify";

export default () => {
    const user = useContext(AuthContext);

    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://oldmanhoops.org/">
                Old Man Hoops
            </Link>{" "}
            {new Date().getFullYear()}
            {". "}
            <Link color="inherit" href="mailto:clay@pfd.net">
                Need Help?
            </Link>{" "}
            <LoginLogout authenticated={user?.authenticated} />
            {"."}
        </Typography>
    );
};

const LoginLogout = (props) => {
    const logout = (event) => {
        event.preventDefault()
        console.log("logging out")
        Auth.signOut()
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }

    if (!props.authenticated) {
        return (
            <Link color="inherit">
                Login
            </Link>
        );
    }
    
    return (
        <Link color="inherit" href="/" onClick={logout}>
            Logout
        </Link>
    );
};
