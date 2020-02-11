import React, { useContext } from 'react'
import { EventInstanceContext } from './EventInstanceContext';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import moment from 'moment';
import Chooser from './Chooser';
import Attendance from './Attendance';

const EventInstance = () => {
    const eventInstance = useContext(EventInstanceContext);
    //console.log(eventInstance);
    let date = moment(eventInstance.date);
    let time = moment(eventInstance.event.defaultTime, 'hh:mm:ss')
    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                {eventInstance.event.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
            {date.format('dddd, MMMM Do YYYY')} @ {time.format('h:mm a')}
            </Typography>
            <Chooser/>
            <Attendance/>
        </Box>
    )
}

export default EventInstance
