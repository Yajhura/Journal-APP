import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote, startDelete } from "../../../actions/notes";
import { useForm } from "../../../hooks/useForm";
import NotesAppBar from "./NotesAppBar";

const NotesScreen = () => {
  const dispatch = useDispatch();

  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title, id } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDelete(id));
  };

  return (
    <div className="notes__main--content">
      <NotesAppBar />

      <div className="notes__content">
        <div className="notes__image">
          {note.url && (
            <div className="notes__image">
              <img width={400} height={400} src={note.url} alt="imagen" />
            </div>
          )}
        </div>

        <div className="notes__editor">
          <h2>titulo</h2>
          <input
            value={title}
            name="title"
            onChange={handleInputChange}
            type="text"
            className="notes__title--input"
            placeholder="Some awesome title"
          />
          <h2>Description</h2>
          <textarea
            value={body}
            name="body"
            onChange={handleInputChange}
            className="notes__textarea"
            placeholder="what happened today"
          ></textarea>
        </div>
        <button onClick={handleDelete} className="btn-red">
          delete
        </button>
      </div>
    </div>
  );
};

export default NotesScreen;
