import React from "react";
import Link from "@material-ui/core/Link";
import { deleteAttendeeWithReturn } from "./eventMutations";
import { API, graphqlOperation } from "aws-amplify";

const Prompt = (props) => {
    
    const handleChangeResponse = (event) => {
        event.preventDefault();
        const input = {
            id: props.attendee.id
        };
        API.graphql(
            graphqlOperation(deleteAttendeeWithReturn, { input: input })
        )
            .then(resp => {
                console.log(resp);
                props.setEventInstance(resp.data.deleteAttendee.eventInstance)
            })
            .catch(err => {
                console.log("Error Removing Attendee Record: ", err);
            });
    };

    if (props.user && props.attendee) {
        return (
            <Link to="#" onClick={(e) => handleChangeResponse(e)}>
                Change Response
            </Link>
        );
    }
    if (props.user) {
        return <>Please Respond</>;
    }
    return (
        <>
            Please{" "}
            <Link to="/login" onClick={() => props.setLogin(true)}>
                Login
            </Link>{" "}
            to respond
        </>
    );
};

export default Prompt;