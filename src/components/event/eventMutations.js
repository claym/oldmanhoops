export const createAttendeeWithReturn = /* GraphQL */ `
    mutation CreateAttendee(
        $input: CreateAttendeeInput!
        $condition: ModelAttendeeConditionInput
    ) {
        createAttendee(input: $input, condition: $condition) {
            id
            status
            name
            eventInstance {
                id
                date
                event {
                    name
                    defaultTime
                }
                attendees {
                    items {
                        id
                        name
                        status
                        owner
                    }
                }
            }
            owner
        }
    }
`;
export const deleteAttendeeWithReturn = /* GraphQL */ `
    mutation DeleteAttendee(
        $input: DeleteAttendeeInput!
        $condition: ModelAttendeeConditionInput
    ) {
        deleteAttendee(input: $input, condition: $condition) {
            id
            status
            name
            eventInstance {
                id
                date
                event {
                    name
                    defaultTime
                }
                attendees {
                    items {
                        id
                        name
                        status
                        owner
                    }
                }
            }
            owner
        }
    }
`;
