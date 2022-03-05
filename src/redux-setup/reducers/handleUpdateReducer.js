export function changeaction(par, index) {
  return {
    type: "CHANGE",
    payload: { par: par, index: index },
  };
}

function handleUpdateReducer(state = { v: false, i: 0 }, action) {
  switch (action.type) {
    case "CHANGE":
      return (state = { v: action.payload.par, i: action.payload.index });

    default:
      return state;
  }
}

export default handleUpdateReducer;
