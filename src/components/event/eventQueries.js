export const listEventInstancesByDate = /* GraphQL */ `
query eventInstancesByDate($date: String!) {
  listEventInstances(filter: {date: {eq: $date}} limit: 100) {
    items {
      date
      id
      event {
        name
        defaultTime
      }
      attendees (limit:100) {
        items {
          id
          name
          status
          owner
        }
      }
    }
  }
}
`;
