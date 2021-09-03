import { makeStyles } from "@material-ui/core";
import { INotes } from "../../types/Notes";
import { blue, green, pink, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note: INotes) => {
      if (note.category === "work") {
        return yellow[700];
      }

      if (note.category === "money") {
        return green[500];
      }

      if (note.category === "todos") {
        return pink[500];
      }

      return blue[500];
    },
  },
  root: {
    maxWidth: 345,
  },
});

export default useStyles;
