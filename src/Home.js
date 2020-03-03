import React from "react";

import Container from "@material-ui/core/Container";

import {
    withAuthenticator,
    SignIn,
    ConfirmSignIn,
    VerifyContact,
    ForgotPassword,
    RequireNewPassword
} from "aws-amplify-react";

import Footer from "./components/Footer";
import Event from "./components/event/Event";

const Home = (props) => {
    console.log("Home Props ", props);
    return (
        <Container maxWidth="sm">
                <Event />

                <Footer />
        </Container>
    );
};

// export const AuthenticatedHome = (props) => {
//   console.log('AuthenticatedHome');
//   return withAuthenticator(Home);
// }

export const AuthenticatedHome = withAuthenticator(Home, true, [
    <SignIn />,
    <ConfirmSignIn />,
    <VerifyContact />,
    <ForgotPassword />,
    <RequireNewPassword />
]);

export default Home;
//export default withAuthenticator(Home);
