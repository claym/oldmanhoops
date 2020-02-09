import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
//import { getEvent as GetEvent } from './graphql/queries'
//import { listEvents as ListEvents } from '../../graphql/queries'
//import { listEventInstances as ListEventInstances } from './graphql/queries';
import { listEventInstancesByDate } from './eventQueries'
import { EventInstanceContext } from './EventInstanceContext';
import EventInstance from './EventInstance';


const Event = () => {

    const [event, setEvent] = useState(null);

    const loadEvent = async () => {
        //const eventData = await API.graphql(graphqlOperation(GetEvent, { id: "29630c06-3fa9-41a4-9227-ce4470fb4522" }))
        //const eventData = await API.graphql(graphqlOperation(ListEvents), {filter:  {date: {eq: "2020-02-10"}}})
        //const eventData = await API.graphql(graphqlOperation(ListEventInstances), {filter:  {date: {eq: "2020-02-10"}}})
        const eventInstanceData = await API.graphql(graphqlOperation(listEventInstancesByDate, {"date": "2020-02-11"}));
        console.log(eventInstanceData);
        //setEvent(eventData.data.listEvents.items[0]);
        setEvent(eventInstanceData.data.listEventInstances.items[0]);
    }

    useEffect(() => {
        loadEvent();
    }, [])

    if(!event) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <EventInstanceContext.Provider value={event}>
            <div>
                <EventInstance />
            </div>
        </EventInstanceContext.Provider>
    )
}

export default Event;