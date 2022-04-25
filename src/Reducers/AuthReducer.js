import { types } from "../types/AuthTypes";

export const AuhtReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOGGIN:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };

    case types.LOGOUT:
      return {};

    default:
      return state;
  }
};
