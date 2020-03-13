import React, { useState, useEffect, useContext } from "react";

import API from "@aws-amplify/api";

import { listEventInstancesByDate } from "./eventQueries";
import { EventInstanceContext } from "./EventInstanceContext";
import EventInstance from "./EventInstance";
import { AuthContext } from "./../user/AuthContext";
import { Grid, Typography } from "@material-ui/core";
import { format, parseISO } from 'date-fns'
import { useQueryParam, StringParam } from 'use-query-params';
import logo from "../../images/omh.svg";

const Event = () => {
    const user = useContext(AuthContext);
    const [eventInstance, setEventInstance] = useState(null);

    const [date] = useQueryParam('date', StringParam);

    useEffect(() => {
        
        let authmode = "AWS_IAM";
        if (user) {
            authmode = "AMAZON_COGNITO_USER_POOLS";
        }
        API.graphql({
            query: listEventInstancesByDate,
            variables: { 
                date: date ? date : new Date().toISOString().substring(0, 10) 
            },
            authMode: authmode
        })
            .then((eventInstanceData) => {
                console.log("Event Loadded");
                console.log("User ", user);
                console.log("authmode ", authmode);
                setEventInstance(
                    eventInstanceData.data.listEventInstances.items[0]
                );
            })
            .catch((err) => {
                console.log("Error loading Event");
                console.log("User ", user);
                console.log("authmode ", authmode);
                console.log("Error: ", err);
            });
    }, [user, date]);

    if (!eventInstance) {
        return <div>Loading...</div>;
    }
    let dt = parseISO(`${eventInstance.date}T${eventInstance.event.defaultTime}`);
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <img
                        src={logo}
                        alt="Old Man Hoops Logo"
                        style={{ marginTop: 3 }}
                    />
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="h3" >
                        {eventInstance.event.name}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                    {format(dt, 'EEEE, MMMM do yyyy')}
                    <br/>
                    {format(dt, 'hh:mm a')}
                    </Typography>
                </Grid>
            </Grid>
            <EventInstanceContext.Provider
                value={{ eventInstance, setEventInstance }}
            >
                <div>
                    <EventInstance />
                </div>
            </EventInstanceContext.Provider>
        </>
    );
};

export default Event;
