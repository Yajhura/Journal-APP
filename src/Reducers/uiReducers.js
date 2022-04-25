import { types } from "../types/AuthTypes";

const initialState = {
  loading: false,
  msgError: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UISETERROR:
      return {
        ...state,
        msgError: action.payload,
      }
    case types.UIREMOVEERROR:
      return {
        ...state,
        msgError: null,
      }
    case types.UISETLOADING:
      return {
        ...state,
        loading: true,
      }
    case types.UIREMOVELOADING:
      return {
        ...state,
        loading: false,
      }

    default:
      return state;
  }
};
