import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import useStyles from "./styles";

import SendIcon from "@material-ui/icons/Send";

const Create: React.FC = () => {
  const classes = useStyles();

  const [title, setTitle] = useState<string>("");
  const [errorTitle, setErrorTitle] = useState<boolean>(false);
  const [details, setDetails] = useState<string>("");
  const [errorDetails, setErrorDetails] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("money");

  const history = useHistory();

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setErrorTitle(false);
    setErrorDetails(false);

    if (!title) setErrorTitle(true);
    if (!details) setErrorDetails(true);

    const newNote = {
      title,
      details,
      category,
    };

    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newNote),
      }).then(() => history.push("/"));
    }
  };

  return (
    <Container
      className={classes.container}
      maxWidth="md"
      onSubmit={handleSubmit}
    >
      <Typography
        variant="h5"
        color="textSecondary"
        component="h2"
        gutterBottom
        className={classes.mt3}
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" style={{ marginBottom: 20 }}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          color="secondary"
          label="Note title"
          variant="outlined"
          fullWidth
          required
          error={errorTitle}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          color="secondary"
          label="Details"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
          error={errorDetails}
        />

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          startIcon={<SendIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
