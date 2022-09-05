import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  List,
  Collapse,
  Divider,
  ListItemIcon,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import "./sidebar.css";

interface ListItemProps {
  item: any;
  drawerOpen?: boolean;
  showActiveTabs: string;
  HideShowIcon?: string;
  onHandleActiveTab: () => void;
  backgroundColor?: string;
}

const MenuItemList = ({
  item,
  drawerOpen,
  showActiveTabs,
  HideShowIcon,
  onHandleActiveTab,
  backgroundColor,
  ...props
}: ListItemProps) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    if (drawerOpen === false) {
      return;
    }
    setOpen(!open);
  };

  return (
    <div {...props} >
      <ListItem
        button
        key={item.Id}
        onClick={() => {
          handleClick();
          onHandleActiveTab();
        }}
        className={`${showActiveTabs} hover-List`}
      >
        {" "}
        <ListItemIcon className={HideShowIcon}>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.Name} />
        {item?.SubMenu?.length && (open && drawerOpen ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>

      <Divider />

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="li" disablePadding key={item.Id}>
          {item.SubMenu?.map(
            (subItems: { Id: number; Name: string; icon: string }) => {
              return (
                <ListItem button key={subItems.Id}>
                  <ListItemIcon className={`${HideShowIcon} child-Icon`}>
                    {subItems.icon}
                  </ListItemIcon>
                  <ListItemText
                    key={subItems.Id}
                    primary={subItems.Name}
                    style={{ marginLeft: "45px" }}
                  />
                </ListItem>
              );
            }
          )}
          <Divider />
        </List>
      </Collapse>
      <Divider />
    </div>
  );
};

export default MenuItemList;
