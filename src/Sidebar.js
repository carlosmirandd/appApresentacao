import React from "react";
import {
  List,
  ListItem,
  Drawer,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  let navigate = useNavigate();
  const classes = useStyles();

  return (
    <Drawer variant="permanent" className={classes.drawer}>
      <List>
        <ListItem button key={"Home"} onClick={() => navigate("/")}>
          <ListItemIcon>🏠</ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem button key={"About"} onClick={() => navigate("/about")}>
          <ListItemIcon>✒️</ListItemIcon>
          <ListItemText primary={"About"} />
        </ListItem>
        <ListItem button key={"Contact"} onClick={() => navigate("/contact")}>
          <ListItemIcon>📧</ListItemIcon>
          <ListItemText primary={"Contact"} />
        </ListItem>
        <ListItem
          button
          key={"Aplicativos"}
          onClick={() => navigate("/Aplicativos")}
        >
          <ListItemIcon>📲</ListItemIcon>
          <ListItemText primary={"Aplicativos"} />
        </ListItem>
      </List>
    </Drawer>
  );
};
export default Sidebar;

const useStyles = makeStyles({
  drawer: {
    width: "260px"
  }
});
