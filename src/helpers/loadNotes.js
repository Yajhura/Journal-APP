import { db } from "../firebase/firebase-config";

export const loadNotes = async (uid) => {
  const notesSnap = await db.collection(`${uid}/Journal/notes`).get();
  const notes = [];
  notesSnap.forEach((snap) => {
    notes.push({
      id: snap.id,
      ...snap.data(),
    });
  });

  return notes;
};
