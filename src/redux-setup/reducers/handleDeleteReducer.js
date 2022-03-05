export function handleDeleteAction() {
  return {
    type: "DELETION",
  };
}

function handleDeleteReducer(state = true, action) {
  switch (action.type) {
    case "DELETION":
      return (state = !state);

    default:
      return state;
  }
}

export default handleDeleteReducer;
