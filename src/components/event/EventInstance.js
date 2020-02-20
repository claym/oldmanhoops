import React, { useContext } from 'react'
import { EventInstanceContext } from './EventInstanceContext';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

import { format, parseISO } from 'date-fns'

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
    let dt = parseISO(`${eventInstance.date}T${eventInstance.event.defaultTime}`);
    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                {eventInstance.event.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
            {format(dt, 'EEEE MMMM do yyyy @ hh:mm a')}
            </Typography>
            <Chooser/>
            <Attendance/>
        </Box>
    )
}

export default EventInstance
