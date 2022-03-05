export function getData(dataObj) {
  return {
    type: "GET_DATA",
    payload: dataObj,
  };
}

export function addData(dataObj) {
  return {
    type: "POST_DATA",
    payload: dataObj,
  };
}

export function updateData(id, dataObj) {
  return {
    type: "PUT_DATA",
    payload: {
      id: id,
      dataObj: dataObj,
    },
  };
}

export function deletData(id, index) {
  return {
    type: "DELETE_DATA",
    payload: {
      id,
      index,
    },
  };
}
