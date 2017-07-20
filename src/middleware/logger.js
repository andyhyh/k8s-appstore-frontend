export default store => next => action => {
  console.log('---> dispatching', action) 
  let result = next(action)
  console.log("action:", action, "result of action:", store.getState())
}
