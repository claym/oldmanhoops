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
    }
  }
`;
