module.exports = {
    createEventInstance: `mutation CreateEventInstance(
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
          attendees {
            nextToken
          }
        }
      }
  `
}