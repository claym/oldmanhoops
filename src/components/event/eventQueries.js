export const listEventInstancesByDate = /* GraphQL */ `
query eventInstancesByDate($date: String!) {
  listEventInstances(filter: {date: {eq: $date}}) {
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
