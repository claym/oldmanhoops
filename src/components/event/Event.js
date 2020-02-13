import React, { useState, useEffect, useContext, useMemo } from 'react';
import { API } from 'aws-amplify'
//import { getEvent as GetEvent } from './graphql/queries'
//import { listEvents as ListEvents } from '../../graphql/queries'
//import { listEventInstances as ListEventInstances } from './graphql/queries';
import { listEventInstancesByDate } from './eventQueries'
import { EventInstanceContext } from './EventInstanceContext';
import EventInstance from './EventInstance';
//import { Auth } from 'aws-amplify'
import moment from 'moment';
import { AuthContext } from './../user/AuthContext';

const Event = () => {
    const user = useContext(AuthContext);
    const [eventInstance, setEventInstance] = useState(null);
    const eventMemo = useMemo(() => ({ eventInstance, setEventInstance }), [eventInstance, setEventInstance]);
    useEffect(() => {
        let authmode = "AWS_IAM"
        if(user) {
            authmode = "AMAZON_COGNITO_USER_POOLS"
        }
        console.log('authmode ', authmode);
        //const eventData = await API.graphql(graphqlOperation(GetEvent, { id: "29630c06-3fa9-41a4-9227-ce4470fb4522" }))
        //const eventData = await API.graphql(graphqlOperation(ListEvents), {filter:  {date: {eq: "2020-02-10"}}})
        //const eventData = await API.graphql(graphqlOperation(ListEventInstances), {filter:  {date: {eq: "2020-02-10"}}})
        //const eventInstanceData = await API.graphql(graphqlOperation(listEventInstancesByDate, {"date": "2020-02-11"}));
        
        API.graphql(
            {
                query: listEventInstancesByDate, 
                variables: {"date": moment().format('YYYY-MM-DD')},
                authMode: authmode
            }).then(eventInstanceData => {
                setEventInstance(eventInstanceData.data.listEventInstances.items[0]);
            })
    }, [user])

    if(!eventInstance) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <EventInstanceContext.Provider value={eventMemo}>
            <div>
                <EventInstance />
            </div>
        </EventInstanceContext.Provider>
    )
}

export default Event;