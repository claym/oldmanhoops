import React, { useContext } from 'react'
import {EventContext} from './EventContext';
import Typography from '@material-ui/core/Typography';

const EventInstance = () => {
    const event = useContext(EventContext);
    console.log(event);
    return (
        <Typography variant="h5" gutterBottom>
            { !event ? "Loading" : event.name}
        </Typography>
    )
}

export default EventInstance
