/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        defaultTime
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      name
      defaultTime
      instances {
        nextToken
      }
    }
  }
`;
export const listEventInstances = /* GraphQL */ `
  query ListEventInstances(
    $id: ID
    $date: ModelStringKeyConditionInput
    $filter: ModelEventInstanceFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEventInstances(
      id: $id
      date: $date
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        date
      }
      nextToken
    }
  }
`;
export const getEventInstance = /* GraphQL */ `
  query GetEventInstance($id: ID!, $date: AWSDate!) {
    getEventInstance(id: $id, date: $date) {
      id
      date
      event {
        id
        name
        defaultTime
      }
      attendees {
        nextToken
      }
    }
  }
`;
export const getAttendee = /* GraphQL */ `
  query GetAttendee($id: ID!) {
    getAttendee(id: $id) {
      id
      status
      name
      eventInstance {
        id
        date
      }
      owner
    }
  }
`;
export const listAttendees = /* GraphQL */ `
  query ListAttendees(
    $filter: ModelAttendeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttendees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        name
        owner
      }
      nextToken
    }
  }
`;
