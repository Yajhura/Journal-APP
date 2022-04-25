import { types } from "../types/AuthTypes";

const initialState = {
  notes: [],
  active: null,
};

export const NotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ACTIVENOTE:
      return {
        ...state,
        active: { ...action.payload },
      };
    case types.SETNOTES:
      return {
        ...state,
        notes: [...action.payload],
      };
    case types.NEWADDNOTES:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };

    case types.UPDATENOTES:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload.note : note
        ),
      };
    case types.REMOVENOTES:
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case types.NOTESLOGOUTCLEANER:
      return {
        ...state,
        notes: [],
        active: null,
      };
    default:
      return state;
  }
};
