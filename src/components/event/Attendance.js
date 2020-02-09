import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  //const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /**
  const handleChangeIndex = index => {
    setValue(index);
  };
   */

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
          <Tab label="In (8)" {...a11yProps(0)} />
          <Tab label="Maybe (2)" {...a11yProps(1)} />
          <Tab label="Out (3)" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <List component="nav" aria-label="secondary mailbox folders">
          <ListItem>
            <ListItemText primary="Kenneth Bailey" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Nicholas Ward" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Roy Peterson" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Larry Evans" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Earl Green" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Benjamin Hall" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Juan Lee" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Richard Gonzales" />
          </ListItem>
        </List>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Item Two
        </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Item Three
        </TabPanel>

    </Grid>
  );
}