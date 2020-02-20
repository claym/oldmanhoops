import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { withAuthenticator } from 'aws-amplify-react';

import Footer from "./components/Footer";
import Event from "./components/event/Event";
import logo from "./images/omh_text.svg";


const Home = (props) => {
  console.log('Home Props ', props);
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="body1" gutterBottom>
          <img src={logo} alt="Old Man Hoops Logo" style={{ border: 1 }} />
        </Typography>

        <Event />

        <Footer />
      </Box>
    </Container>
  );
};

// export const AuthenticatedHome = (props) => {
//   console.log('AuthenticatedHome');
//   return withAuthenticator(Home);
// }

export const AuthenticatedHome = withAuthenticator(Home);

export default Home;
//export default withAuthenticator(Home);
