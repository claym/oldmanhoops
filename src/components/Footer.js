import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
export default () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://oldmanhoops.org/">
                Old Man Hoops
        </Link>{' '}
            {new Date().getFullYear()}
            {'. '}
            <Link color="inherit" href="mailto:clay@pfd.net">Need Help?</Link>
        </Typography>
    );
}