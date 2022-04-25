import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../../actions/auth";
import { addNotes } from "../../../actions/notes";
import JournalEntries from "./JournalEntries";

const Sidebar = () => {
  const { name } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const handleLogaout = () => {
    dispatch(startLogout());
  };

  const handleAddNote = () => {
    dispatch(addNotes());
  };

  return (
    <div className="journal__sidebar">
      <nav className="journal__sidebar--navbar">
        <div className="journal__sidebar--navbar--menu">
          <h3>
            <i className="fa-solid fa-circle-user"></i>
            <span>{name}</span>
          </h3>

          <button onClick={handleLogaout}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
      </nav>
      <div className="journal__sidebar--newentry">
        <h3>Agrega tus nuevas tareas</h3>

        <button onClick={handleAddNote}>
          <i className="fa-solid fa-calendar-plus fa-5x"></i>

          <span>Nueva tarea</span>
        </button>
      </div>
      <JournalEntries />
    </div>
  );
};

export default Sidebar;
