import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";
import NoteCard from "../../components/NoteCard";
import Masonry from "react-masonry-css";

import { INotes } from "../../types/Notes";

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<INotes[]>([]);

  const classes = useStyles();

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id: number): Promise<void> => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: "DELETE",
    });

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Masonry
        breakpointCols={breakpoints}
        className="masonry-grid"
        columnClassName="masonry-grid-column"
      >
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard note={note} onDeleteClick={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Notes;
