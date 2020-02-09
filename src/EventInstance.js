import React, { useContext } from 'react'
import {EventContext} from './EventContext';

const EventInstance = () => {
    const event = useContext(EventContext);
    console.log(event);
    return (
        <div>
            { !event ? "Loading" : event.name}
        </div>
    )
}

export default EventInstance
