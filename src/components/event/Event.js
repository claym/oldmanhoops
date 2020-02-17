import React, { useState, useEffect, useContext } from 'react';

import API from '@aws-amplify/api'

import moment from 'moment';

import { listEventInstancesByDate } from './eventQueries'
import { EventInstanceContext } from './EventInstanceContext';
import EventInstance from './EventInstance';
import { AuthContext } from './../user/AuthContext';

const Event = () => {
    const user = useContext(AuthContext);
    const [eventInstance, setEventInstance] = useState(null);

    useEffect(() => {
        let authmode = "AWS_IAM"
        if(user) {
            authmode = "AMAZON_COGNITO_USER_POOLS"
        }
        API.graphql(
            {
                query: listEventInstancesByDate, 
                variables: {"date": moment().format('YYYY-MM-DD')},
                authMode: authmode
            }).then(eventInstanceData => {
                console.log("Event Loadded")
                console.log("User ", user);
                console.log('authmode ', authmode);
                setEventInstance(eventInstanceData.data.listEventInstances.items[0]);
            }).catch(err => {
                console.log("Error loading Event")
                console.log("User ", user);
                console.log('authmode ', authmode);
                console.log("Error: ", err);
            })
    }, [user])

    if(!eventInstance) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <EventInstanceContext.Provider value={{eventInstance, setEventInstance}}>
            <div>
                <EventInstance />
            </div>
        </EventInstanceContext.Provider>
    )
}

export default Event;