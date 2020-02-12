import React from "react";
import {useContext} from "react";
import HelpIcon from "@material-ui/icons/Help";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
//import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
//import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Grid, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Link from "@material-ui/core/Link";

import { AuthContext } from "../user/AuthContext";
import { LoginContext } from './../user/LoginContext';



const Chooser = () => {

    const user = useContext(AuthContext);


    const styles = {
        smallIcon: {
            width: 90,
            height: 90
        },
        small: {
            width: 94,
            height: 94,
            padding: 2
        },
        mediumIcon: {
            width: 100,
            height: 100
        },
        medium: {
            width: 110,
            height: 110,
            padding: 5
        },
        largeIcon: {
            width: 120,
            height: 120
        },
        large: {
            width: 140,
            height: 140,
            padding: 10,
            marginLeft: 12,
            marginRight: 12
        }
    };

    const isSmall = useMediaQuery("(max-width:320px)", { noSsr: true });
    const isMedium = useMediaQuery("(max-width:414px)", { noSsr: true });
    let size = "large";
    if (isSmall) {
        size = "small";
    } else if (isMedium) {
        size = "medium";
    }

    return (
        <>
            <Typography variant="body1" gutterBottom>
                <Prompt authenticated={user.authenticated} />
            </Typography>
            <Grid container justify="center">
                <IconButton style={styles[size]} >
                    <CheckCircleIcon style={styles[size + "Icon"]} />
                </IconButton>
                <IconButton style={styles[size]} >
                    <HelpIcon style={styles[size + "Icon"]} />
                </IconButton>
                <IconButton style={styles[size]} >
                    <CancelIcon style={styles[size + "Icon"]} />
                </IconButton>
            </Grid>
        </>
    );
};

const Prompt = (props) => {
    const {setLogin} = useContext(LoginContext);
    if (props.authenticated) {
        return <>Please Respond</>;
    }
    return (
        <>
            Please <Link to="/login" onClick={() => setLogin(true)}>Login</Link> to respond
        </>
    );
};

export default Chooser;
