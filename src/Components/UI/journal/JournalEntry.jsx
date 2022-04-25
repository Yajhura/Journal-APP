import React from "react";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { activeNote } from "../../../actions/notes";

const JournalEntry = ({ id, body, title,date,  url }) => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);

  const handleClickEntry = () => {
    const note = notes.find((note) => note.id === id);
    dispatch(activeNote(id, note));
  };

  return (
    <div onClick={handleClickEntry} className="journal__entry">
      {url && (
        <div
          className="journal__entry--picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${ url })`,
          }}
        ></div>
      )}
      <div className="journal__entry--body">
        <div className="journal__entry--title">
          <h3>{title}</h3>
        </div>

        <div className="journal__entry--content">
          <p>{body}</p>
        </div>

        <div className="journal__entry--date-box">
           <span> {format(new Date(date), "EEEE")}</span>
          <h3>{format(new Date(date), "io")}</h3> 
         
        </div>
      </div>
    </div>
  );
};

export default JournalEntry;
