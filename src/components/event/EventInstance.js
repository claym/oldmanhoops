import React, { useContext } from 'react'
import { EventInstanceContext } from './EventInstanceContext';

import Chooser from './Chooser';
import Attendance from './Attendance';

const EventInstance = () => {
    const {eventInstance} = useContext(EventInstanceContext);
    console.log('eventInstance ', eventInstance);
    //let date = parseISO(eventInstance.date)
    //console.log('time ', eventInstance.event.defaultTime);
    //let time = parse(eventInstance.event.defaultTime, 'hh:mm:ss-xxx', new Date())
    //console.log('fts time', time);
    //console.log('fts time ', format(time, 'h:mm'));

    return (
        <>
            <Chooser/>
            <Attendance/>
        </>
    )
}

export default EventInstance
