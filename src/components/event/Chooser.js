import React from "react";
import { useContext, useState, useEffect } from "react";
import HelpIcon from "@material-ui/icons/Help";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
//import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
//import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Grid, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Link from "@material-ui/core/Link";

import { API, graphqlOperation } from "aws-amplify";

import { AuthContext } from "../user/AuthContext";
import { LoginContext } from "./../user/LoginContext";

import styles from "./ChooserButtonStyles";
import { EventInstanceContext } from "./EventInstanceContext";
import { createAttendee } from "../../graphql/mutations";

const Chooser = () => {
    const user = useContext(AuthContext);
    const eventInstance = useContext(EventInstanceContext);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (!user) {
            setDisabled(true);
        } else {
            console.log(eventInstance);
            const exists = eventInstance.attendees.items.find((attendee) => {
                return attendee.owner === user.username;
            });
            console.log('exists: ', exists);
            if (exists) {
                setDisabled(true);
            } else {
                setDisabled(false);
            }
        }
        console.log("disabled ", disabled);
    }, [user, eventInstance, disabled]);

    const updateStatus = async (e) => {
        console.log(e);
        console.log(user.attributes.name);
        console.log(eventInstance.id);
        const attendeeInput = {
            status: e,
            name: user.attributes["name"],
            attendeeEventInstanceId: eventInstance.id
        };
        API.graphql(
            graphqlOperation(createAttendee, { input: attendeeInput })
        )
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
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
                <Prompt user={user} />
            </Typography>
            <Grid container justify="center">
                <IconButton
                    style={styles[size]}
                    name="in"
                    disabled={disabled}
                    onClick={() => updateStatus("in")}
                >
                    <CheckCircleIcon name="in" style={styles[size + "Icon"]} />
                </IconButton>
                <IconButton
                    style={styles[size]}
                    name="maybe"
                    disabled={disabled}
                    onClick={() => updateStatus("maybe")}
                >
                    <HelpIcon style={styles[size + "Icon"]} />
                </IconButton>
                <IconButton
                    style={styles[size]}
                    name="out"
                    disabled={disabled}
                    onClick={() => updateStatus("out")}
                >
                    <CancelIcon style={styles[size + "Icon"]} />
                </IconButton>
            </Grid>
        </>
    );
};

const Prompt = (props) => {
    const { setLogin } = useContext(LoginContext);
    if (props.user) {
        return <>Please Respond</>;
    }
    return (
        <>
            Please{" "}
            <Link to="/login" onClick={() => setLogin(true)}>
                Login
            </Link>{" "}
            to respond
        </>
    );
};

export default Chooser;
