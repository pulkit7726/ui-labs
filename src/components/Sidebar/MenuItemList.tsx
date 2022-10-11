import React, { useState } from 'react';
import {
  ListItem,
  ListItemText,
  List,
  Collapse,
  Divider,
  ListItemIcon,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import './sidebar.css';

interface ListItemProps {
  item: any;
  drawerOpen?: boolean;
  showActiveTabs?: boolean;
  backgroundColor?: string;
  setActiveTab?: any;
  setActiveSubMenu?: any;
  activeSubMenu?: any;
  className?: string;
  responsive?: boolean;
}

function MenuItemList({
  item,
  drawerOpen,
  showActiveTabs,
  backgroundColor,
  setActiveTab,
  className,
  activeSubMenu,
  setActiveSubMenu,
  responsive,
  ...props
}: ListItemProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (drawerOpen === false) {
      return;
    }
    setOpen(!open);
  };
  return (
    <div {...props}>
      <ListItem
        className={className}
        button
        key={item.Id}
        onClick={() => {
          handleClick();
          setActiveTab(item.Id);
          setActiveSubMenu('');
        }}
      >
        {
          item.icon && <ListItemIcon>{item.icon}</ListItemIcon>
        }
        <ListItemText primary={item.Name} />
        {item?.SubMenu?.length
          && (open && drawerOpen ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      <Divider />
      {
        (!responsive || (responsive && drawerOpen)) && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="li" disablePadding key={item.Id}>
              {item.SubMenu?.map(
                (
                  subItems: any,
                  index: any,
                ) => (
                  <ListItem
                    button
                    key={subItems.Id}
                    onClick={() => {
                      setActiveTab('');
                      setActiveSubMenu(subItems.Id);
                    }}
                    className={`${showActiveTabs && (subItems.Id === activeSubMenu ? 'avtiveTab' : 'inActiveTab')}`}
                  >
                    {
                        subItems.icon && <ListItemIcon className="child-Icon">{subItems.icon}</ListItemIcon>
                      }
                    <ListItemText
                      key={subItems.Id}
                      primary={subItems.Name}
                      style={{ marginLeft: '45px' }}
                    />
                  </ListItem>
                ),
              )}
              <Divider />
            </List>
          </Collapse>
        )
      }
      <Divider />
    </div>
  );
}

export default MenuItemList;
