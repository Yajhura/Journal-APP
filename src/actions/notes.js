import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/AuthTypes";
import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload";

export const addNotes = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const doc = await db.collection(`${uid}/Journal/notes`).add(newNote);

    dispatch(activeNote(doc.id, newNote));
    dispatch(newAddNote(doc.id, newNote));
  };
};

export const activeNote = (id, note) => ({
  type: types.ACTIVENOTE,
  payload: {
    id,
    ...note,
  },
});

export const setNotes = (notes) => ({
  type: types.SETNOTES,
  payload: notes,
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const saveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!note.url) {
      delete note.url;
    }

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    await db.doc(`${uid}/Journal/notes/${note.id}`).update(noteToFirestore);

    dispatch(refreshNote(note.id, noteToFirestore));
    Swal.fire("Saved", note.title, "success");
    Swal.close();
  };
};

export const refreshNote = (id, note) => ({
  type: types.UPDATENOTES,
  payload: {
    id,
    note: {
      id,
      ...note,
    },
  },
});

export const startUploading = (file) => {
  return async (dispatch, getState) => {
    const activeNote = getState().notes.active;

    Swal.fire({
      title: "Subiendo...",
      text: "Espere un momento",
      allowOutsideClick: false,
      width: "50rem",

      didOpen: () => {
        Swal.showLoading();
      },
    });

    const fileUrl = await fileUpload(file);
    activeNote.url = fileUrl;
    dispatch(saveNote(activeNote));
    
  };
};

export const startDelete = (id) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    await db.doc(`${uid}/Journal/notes/${id}`).delete();

    dispatch(deleteNote(id));
  };
};

export const deleteNote = (id) => ({
  type: types.REMOVENOTES,
  payload: id,
});

export const notesLogout = () => ({
  type: types.NOTESLOGOUTCLEANER,
});


export const newAddNote = (id,note) => ({
   type: types.NEWADDNOTES,
   payload: {id, ...note}

});