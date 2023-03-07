import { INCREASE, DECREASE, DELETE } from "./constants.js";

export function incrementAction(id) {
  return {
    type: INCREASE,
    payload: { id }
  };
}

export function decreaseAction(id) {
  return {
    type: DECREASE,
    payload: { id }
  };
}

export function deleteAction(id) {
  return {
    type: DELETE,
    payload: { id }
  };
}
