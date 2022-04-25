import { types } from "../types/AuthTypes";

export const setError = (err) => ({
  type: types.UISETERROR,
  payload: err,
});
export const removeError = () => ({
  type: types.UIREMOVEERROR,
});

export const setLoading = () => ({
  type: types.UISETLOADING,
});

export const removeLoading = () => ({
  type: types.UIREMOVELOADING,
});
