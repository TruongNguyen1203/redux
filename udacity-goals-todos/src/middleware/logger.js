const logger = (state) => (next) => (action) => {
    console.group(action.type)
    console.log('The action: ', action)
    const result = next(action)
    console.log('The new state: ', state.getState())
    console.groupEnd()
    return result
  }

  export default logger