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

export const REMOVE = (iteam) => {
  return {
    type: "RMV",
    payload: iteam,
  };
};
