import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "85vh",
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
    "& .Mui-focused": {
      color: theme.palette.secondary.main,
    },
  },
  mt3: {
    marginTop: 30,
  },
}));

export default useStyles;
