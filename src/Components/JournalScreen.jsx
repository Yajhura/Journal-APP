import React from "react";
import { useSelector } from "react-redux";

import Sidebar from "./UI/journal/Sidebar";
import NotesScreen from "./UI/notes/NotesScreen";

const JournalScreen = () => {
  const { active } = useSelector((state) => state.notes);


  return (
    <div className="journal__main-content animate__animated  animate__fadeIn">
      <Sidebar />

       {
        active ? <NotesScreen /> : <h1>No notes found</h1>
       }
    </div>
  );
};

export default JournalScreen;
