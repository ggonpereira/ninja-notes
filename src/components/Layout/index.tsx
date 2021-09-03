import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { AddCircleOutlined, SubjectOutlined } from "@material-ui/icons";

import { format } from "date-fns";

import johnDoe from "../../assets/john_doe.jpg";
import { IMenuItems, ILayoutProps } from "../../types/Notes";
import useStyles from "./styles";

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems: IMenuItems[] = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlined color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} elevation={0} color={"transparent"}>
        <Toolbar>
          <Typography className={classes.date}>
            Today is {format(new Date(), "MMMM d Y")}
          </Typography>
          <Typography>John Doe</Typography>
          <Avatar src={johnDoe} className={classes.avatar} />
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.drawerTitle}>
            Ninja Notes
          </Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => history.push(`${item.path}`)}
              className={location.pathname === item.path ? classes.active : ""}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
