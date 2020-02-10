import React from 'react';
import {useEffect, useRef} from 'react';
import HelpIcon from '@material-ui/icons/Help';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
//import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Grid, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Auth } from 'aws-amplify';
const Chooser = () => {
    let authenticated = useRef(null);
    useEffect(() => {
        Auth.currentCredentials().then(creds => {
            authenticated.current = creds.authenticated;
        })
    })

    const styles = {
        smallIcon: {
            width: 90,
            height: 90,
        },
        small: {
            width: 94,
            height: 94,
            padding: 2,
        },        
        mediumIcon: {
            width: 100,
            height: 100,
        },
        medium: {
            width: 110,
            height: 110,
            padding: 5,
        },        
        largeIcon: {
            width: 120,
            height: 120,
        },
        large: {
            width: 140,
            height: 140,
            padding: 10,
            marginLeft: 12,
            marginRight: 12,
        },
    };

    const isSmall = useMediaQuery('(max-width:320px)', {noSsr: true});
    const isMedium = useMediaQuery('(max-width:414px)', {noSsr: true});
    let size = "large";
    if(isSmall) {
        size = "small";
    } else if(isMedium) {
        size = "medium";
    }
    
    

    return (
        <>
        <Typography variant="body1" gutterBottom>
            <Prompt authenticated={authenticated}/>
        </Typography>
        <Grid container justify = "center">
            <IconButton style={styles[size]} disabled={!authenticated.current}>
                <CheckCircleIcon color="secondary" style={styles[size+"Icon"]} />
            </IconButton>
            <IconButton style={styles[size]} disabled={!authenticated.current}>
                <HelpIcon color="secondary" style={styles[size+"Icon"]} />
            </IconButton>
            <IconButton style={styles[size]} disabled={!authenticated.current}>
                <CancelIcon color="secondary" style={styles[size+"Icon"]} />
            </IconButton>            
        </Grid>
        </>
    )
}

const Prompt = (props) => {
    console.log(props.authenticated)
    if(props.authenticated.current) {
        return (
            <>Please Respond</>
        )
    }
    return (
        <>Please LOGIN to respond</>
    )

}

export default Chooser
