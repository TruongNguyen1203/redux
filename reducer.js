function appReducer(
  state = [
    { flavor: "Chocolate", count: 36 },
    { flavor: "Vanilla", count: 210 },
  ],
  action = { type: 'DELETE_FLAVOR', flavor: 'Vanilla' }
) {
  if (action.type === "DELETE_FLAVOR") {
      return state.filter(x => x.flavor !== action.flavor)
  }

  return state;
}
