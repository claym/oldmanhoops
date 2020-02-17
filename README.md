# React/Amplify webapp for OldManHoops.net

**What it does**: Creates a reoccuring event, allowing invited people to state if they are In, Out, or Maybe via web interface.

**How it works**: Create-React-App, built on top of AWS Amplify. Utilizes AppSync for database, Cognito for users, lambda for scheduled events.

**How to set it up:**

1. git clone https://github.com/claym/oldmanhoops
2. cd oldmanhoops
3. amplify init
4. amplify push
5. Create a user account in aws cognito
6. Add yourself to the admin user pool.
7. Go log in to the app, appsync login won't let you change the password there. 
8. Grab the Cognito > App clients > App client id > the one with clientWeb
8. Go to your AppSync backend. Log in via User Pools. Run
    1. (update name/defaultTime as you see fit)
    2. Run the following. It will return an event id. Copy this, you'll need it for step 9.
            
            mutation createEvent {
            createEvent(input: {name: "CAC Lunch Hoops", defaultTime: "12:00:00-05:00"})
            }               

9. Go to your amplify console. Click the env you're working on, > Functions > EventInstanceCreate-<env> 
    1. Add an environment variable named "EVENT_ID" and set it to the event id generated when you created the event in AppSync
    2. Create a cloudwatch scheduled task to generate it week-daily. Remember to account for UTC (EST is -5)!
    3. You may want to run a test on it so it will create a event for today and you can verify the frontend

**Thanks**

Thanks to [@FullStackPho](https://twitter.com/fullstackpho) who's [Medium article](https://medium.com/@fullstackpho/aws-amplify-multi-auth-graphql-public-read-and-authenticated-create-update-delete-1bf5443b0ad1) helped me figure out how to do queries for non-authenticated people

Also to @eliasericsson and @dantasfiles in the Amplify Gitter for making good suggestions.