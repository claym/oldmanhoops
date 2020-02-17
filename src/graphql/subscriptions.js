/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
      id
      name
      defaultTime
      instances {
        nextToken
      }
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
      id
      name
      defaultTime
      instances {
        nextToken
      }
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
      id
      name
      defaultTime
      instances {
        nextToken
      }
    }
  }
`;
export const onUpdateEventInstance = /* GraphQL */ `
  subscription OnUpdateEventInstance {
    onUpdateEventInstance {
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
export const onDeleteEventInstance = /* GraphQL */ `
  subscription OnDeleteEventInstance {
    onDeleteEventInstance {
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
export const onCreateAttendee = /* GraphQL */ `
  subscription OnCreateAttendee($owner: String!) {
    onCreateAttendee(owner: $owner) {
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
export const onUpdateAttendee = /* GraphQL */ `
  subscription OnUpdateAttendee($owner: String!) {
    onUpdateAttendee(owner: $owner) {
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
export const onDeleteAttendee = /* GraphQL */ `
  subscription OnDeleteAttendee($owner: String!) {
    onDeleteAttendee(owner: $owner) {
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
export const onCreateEventInstance = /* GraphQL */ `
  subscription OnCreateEventInstance {
    onCreateEventInstance {
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
