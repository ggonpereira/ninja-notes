import React from "react";
import Grid from "@material-ui/core/Grid";
import { INoteCardProps } from "../../types/Notes";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import IconButton from "@material-ui/core/IconButton";
import useStyles from "./styles";

const NoteCard: React.FC<INoteCardProps> = ({ note, onDeleteClick }) => {
  const classes = useStyles(note);

  return (
    <Grid item key={note.id} lg={3} md={4} sm={6} xs={12}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton
              aria-label="Delete"
              onClick={() => onDeleteClick(note.id)}
            >
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default NoteCard;
