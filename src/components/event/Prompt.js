import React from "react";
import Link from "@material-ui/core/Link";
import { deleteAttendee } from "../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";

const Prompt = (props) => {
    const handleChangeResponse = (event) => {
        event.preventDefault();
        const input = {
            id: props.attendee.id
        };
        API.graphql(graphqlOperation(deleteAttendee, {input: input}));
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
