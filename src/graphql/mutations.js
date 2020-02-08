/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      name
      defaultTime
      instances {
        nextToken
      }
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      name
      defaultTime
      instances {
        nextToken
      }
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      name
      defaultTime
      instances {
        nextToken
      }
    }
  }
`;
export const createEventInstance = /* GraphQL */ `
  mutation CreateEventInstance(
    $input: CreateEventInstanceInput!
    $condition: ModelEventInstanceConditionInput
  ) {
    createEventInstance(input: $input, condition: $condition) {
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
export const updateEventInstance = /* GraphQL */ `
  mutation UpdateEventInstance(
    $input: UpdateEventInstanceInput!
    $condition: ModelEventInstanceConditionInput
  ) {
    updateEventInstance(input: $input, condition: $condition) {
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
export const deleteEventInstance = /* GraphQL */ `
  mutation DeleteEventInstance(
    $input: DeleteEventInstanceInput!
    $condition: ModelEventInstanceConditionInput
  ) {
    deleteEventInstance(input: $input, condition: $condition) {
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
