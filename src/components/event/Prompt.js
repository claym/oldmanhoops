import React from "react";

import Link from "@material-ui/core/Link";

import API from "@aws-amplify/core";
import { graphqlOperation } from '@aws-amplify/api';

import { deleteAttendeeWithReturn } from "./eventMutations";

const Prompt = (props) => {
    const handleChangeResponse = (event) => {
        event.preventDefault();
        const input = {
            id: props.attendee.id
        };
        API.graphql(
            graphqlOperation(deleteAttendeeWithReturn, { input: input })
        )
            .then((resp) => {
                console.log(resp);
                props.setEventInstance(resp.data.deleteAttendee.eventInstance);
            })
            .catch((err) => {
                console.log("Error Removing Attendee Record: ", err);
            });
    };

    if (props.user && props.attendee) {
        return (
            <>
                Hi, {props.user?.attributes?.name}.{" "}
                <Link href="#" onClick={(e) => handleChangeResponse(e)}>
                    Change Response?
                </Link>
            </>
        );
    }
    if (props.user) {
        return <>Hi, {props.user?.attributes?.name}. Please Respond!</>;
    }
    return (
        <>
            Please{" "}
            <Link
                href="#"
                onClick={(event) => {
                    event.preventDefault();
                    props.setLogin(true);
                }}
            >
                Login
            </Link>{" "}
            to respond
        </>
    );
};

export default Prompt;
