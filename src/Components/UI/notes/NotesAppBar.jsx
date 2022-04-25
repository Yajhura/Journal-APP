import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveNote, startUploading } from "../../../actions/notes";
import { formatDate } from "../../../helpers/DateEs";

const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(saveNote(active));
  };

  const handlePicture = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };
  return (
    <div className="notes__appbar">
     <span>{formatDate(active.date)}</span> 

      <input
        id="fileSelector"
        onChange={handleFileChange}
        style={{ display: "none" }}
        type="file"
      />
      <div className="notes__buttons">
        <button onClick={handlePicture} className="btn-red">
          picture
        </button>
        <button onClick={handleSave} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
