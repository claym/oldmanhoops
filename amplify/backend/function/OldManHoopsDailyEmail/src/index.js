/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */

var AWS = require("aws-sdk");

var region = process.env.REGION;
var userPoolId = process.env.USER_POOL_ID;
var clientId = process.env.CLIENT_ID;
var userGroupName = process.env.USER_GROUP_NAME;
var siteUrl = process.env.SITE_URL;
var emailSubject = process.env.EMAIL_SUBJECT
var emailSender = process.env.EMAIL_SENDER

AWS.config.setPromisesDependency(null);
const cognitoClient = new AWS.CognitoIdentityServiceProvider({
    region: region
});
const sesClient = new AWS.SES({ region: region });
exports.handler = async (event) => {
    var poolData = {
        GroupName: userGroupName, // your user pool id here
        UserPoolId: userPoolId // your client id here
    };

    //console.log(poolData);

    let promise = cognitoClient.listUsersInGroup(poolData).promise();

    await promise
        .then((data) => {
            let promises = data.Users.map((user) => {
                //user.Attributes.map(attr => {console.log(attr.Name)})
                let email = user.Attributes.find(
                    (attr) => attr.Name === "email"
                );
                let ep = emailPromise(email.Value);
                return ep;
            });
            return promises;
        })
        .then((promises) => {
            return Promise.all(promises);
        })
        .catch((err) => {
            console.log("Error...");
            console.log(JSON.stringify(err));
            //return err;
        });
    //console.log(userResp);
    // TODO implement
    // const response = {
    //     statusCode: 200,
    //     body: JSON.stringify("Hello from Lambda!")
    // };
    // return response;
    return;
};

const emailPromise = async (address) => {
    var date = new Date();
    var params = {
        Destination: {
            ToAddresses: [address]
        },
        Message: {
            Body: {
                Html: { Data: `
                Good morning!<br/><br/>
                Please log your status for today's (${date.toISOString().substring(0,10)}) Pickup Basketball event @ <a href="${siteUrl}">${siteUrl}</a>
                <br/><br/>
                If you want to be removed from this reminder, please reply.
                <br/><br/>
                Thanks
                ` }
            },

            Subject: { Data: `${emailSubject} (${date.toISOString().substring(0,10)})` }
        },
        Source: emailSender
    };

    let promise = sesClient.sendEmail(params).promise();
    return promise;
};
