import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import MenuItemList from './MenuItemList';
import ResponsiveSideBar from "./Responsive";

const drawerWidth = 240;

type SideBarProps = {
  MenuItems: any;
  Responsive: boolean;
  position?: "left" | "right";
  showIcon?: boolean;
  showActiveTabs?: boolean;
  window?: () => Window;
  title?: string;
  image?: string;
  backgroundColor?: string;
  color?: string;
};

export const SideBar = ({
  position,
  Responsive,
  showIcon,
  MenuItems,
  showActiveTabs,
  window,
  title,
  image,
  backgroundColor,
  color,
  ...props
}: SideBarProps) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(null);

  const HideShowIcon = showIcon ? "showIcon" : "hideIcon";
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleActiveTab = (index: any) => setActiveIndex(index);

  const drawer = (
    <div>
      <Toolbar>
       <img src={image} className="logoSize" />
       <h2 style={{ color }}>{title}</h2>
      </Toolbar>
      <Divider />
      <List>
        {MenuItems.map((item: any, index: any, Id: number) => (
          <MenuItemList
            item={item}
            key={item.Id}
            showActiveTabs={index === activeIndex ? "avtiveTab" : "inActiveTab"}
            onHandleActiveTab={() => handleActiveTab(index)}
            HideShowIcon={HideShowIcon}
            backgroundColor={`${backgroundColor} `}
          />
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar style={{ backgroundColor: "#343A40" }} position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {!Responsive ? <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          anchor={position}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          PaperProps={{
            style: {
              backgroundColor,
              color,
              width: 'max-content',
              minWidth: '245px'
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          anchor={position}
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
          PaperProps={{
            style: {
              backgroundColor,
              color,
              width: 'max-content',
              minWidth: '245px'
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box> : <ResponsiveSideBar
        MenuItems={MenuItems}
        position={"left"}
        iconHide={showIcon}
        title={title}
        image={image}
        backgroundColor={backgroundColor}
        color={color}
        window={window}
      />
      }
    </Box>
  )
};