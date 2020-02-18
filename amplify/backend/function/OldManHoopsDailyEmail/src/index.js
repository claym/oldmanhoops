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

AWS.config.setPromisesDependency(null);
const cognitoClient = new AWS.CognitoIdentityServiceProvider({
    region: region
});
const sesClient = new AWS.SES({region: region});
exports.handler = async (event) => {
    var poolData = {
        GroupName: userGroupName, // your user pool id here
        UserPoolId: userPoolId // your client id here
    };

    console.log(poolData);

    let promise = cognitoClient.listUsersInGroup(poolData).promise();

    await promise
        .then((data) => {
            //console.log('Data.Users');
            //console.log(data.Users);
            
            let addresses = data.Users.map((user) => {
                //user.Attributes.map(attr => {console.log(attr.Name)})
                let email = user.Attributes.find(
                    (attr) => attr.Name === "email"
                );
                //console.log(email.Value);
                return email.Value;
                
            });
            return addresses;
        }).then(addresses => {
            var params = {
                Destination: {
                    ToAddresses: addresses
                },
                Message: {
                    Body: {
                        Text: { Data: "Test"
                            
                        }
                        
                    },
                    
                    Subject: { Data: "Test Email"
                        
                    }
                },
                Source: "help@oldmanhoops.net"
            };
            console.log('email params');
            console.log(params);
            return sesClient.sendEmail(params).promise();
            
        }).then(data => {
            console.log("Sent Email: ", data);
        })
        .catch((err) => {
            console.log("Error...");
            console.log(JSON.stringify(err));
            //return err;
        });
    //console.log(userResp);
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify("Hello from Lambda!")
    };
    return response;
};
