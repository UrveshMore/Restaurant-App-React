export const DELETE = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

export const ADD_DATA = (item) => {
  return {
    type: "ADD",
    payload: item,
  };
};

export const REMOVE_DATA = (iteam) => {
  return {
    type: "REMOVE",
    payload: iteam,
  };
};
