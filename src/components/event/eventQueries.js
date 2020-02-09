export const listEventInstancesByDate = /* GraphQL */ `
query eventInstancesByDate($date: String!) {
  listEventInstances(limit: 1, filter: {date: {eq: $date}}) {
    items {
      date
      id
      event {
        name
        defaultTime
      }
    }
  }
}
`;
