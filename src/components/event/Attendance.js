import React, {useContext} from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { EventInstanceContext } from './EventInstanceContext';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`
    };
}

export default function FullWidthTabs() {
    //const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const {eventInstance} = useContext(EventInstanceContext);
    console.log(eventInstance);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    /**
  const handleChangeIndex = index => {
    setValue(index);
  };
   */

    const inAttendees = eventInstance.attendees.items.filter(
        (attendee) => attendee.status === "in"
    );
    const outAttendees = eventInstance.attendees.items.filter(
        (attendee) => attendee.status === "out"
    );
    const mayAttendees = eventInstance.attendees.items.filter(
        (attendee) => attendee.status === "maybe"
    );

    return (
        <Grid container justify="flex-start">
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label={`In (${inAttendees.length})`} {...a11yProps(0)} />
                    <Tab label={`Maybe (${mayAttendees.length})`} {...a11yProps(1)} />
                    <Tab label={`Out (${outAttendees.length})`} {...a11yProps(2)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0} dir={theme.direction}>
                <List component="nav" aria-label="secondary mailbox folders">
                    {inAttendees.map((attendee) => (
                        <AttendeeListItem key={attendee.id} attendee={attendee} />
                    ))}
                </List>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <List component="nav" aria-label="secondary mailbox folders">
                    {mayAttendees.map((attendee) => (
                        <AttendeeListItem key={attendee.id} attendee={attendee} />
                    ))}
                </List>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                <List component="nav" aria-label="secondary mailbox folders">
                    {outAttendees.map((attendee) => (
                        <AttendeeListItem key={attendee.id} attendee={attendee} />
                    ))}
                </List>
            </TabPanel>
        </Grid>
    );
}

const AttendeeListItem = (props) => {
    return (
        <ListItem>
            <ListItemText
                primary={props.attendee.name}
            />
        </ListItem>
    );
};
