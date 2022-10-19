import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import MenuItemList from "./MenuItemList";
import ResponsiveSideBar from "./Responsive";

const drawerWidth = 240;

type SideBarProps = {
<<<<<<< HEAD
  /**display menuItems */
  MenuItems: any;
  /**hide show  in responsive sidebar */
  showArrowIcon: boolean;
  /** want tooltip then true else false */
  tooltip: boolean;
  /**if true then responive show else false then Basic sidebar show  */
  Responsive: boolean;
  /** can able to change position  left or right*/
  position?: "left" | "right";
  /**want active indicator in tab then true else false */
  showActiveTabs?: boolean;
  /** it is a function */
  window?: () => Window;
  /** display title */
  title?: string;
  /**display image */
  image?: string;

  backgroundColor?: string;
  color?: string;
  /**default prop */
  activeIndicatorClass?: string;
};

export const SideBar = ({
=======
  MenuItems: any;
  showArrowIcon: boolean;
  tooltip: boolean;
  Responsive: boolean;
  position?: 'left' | 'right';
  showActiveTabs?: boolean;
  window?: () => Window;
  title?: string;
  image?: string;
  backgroundColor?: string;
  color?: string;
  activeIndicatorClass?: string;
};

export function SideBar({
>>>>>>> efdb20a4c957b0cbcafb4f352d9955c90b55054b
  position,
  Responsive,
  showArrowIcon,
  tooltip,
  MenuItems,
  showActiveTabs,
  window,
  title,
  image,
  backgroundColor,
  color,
  activeIndicatorClass,
  ...props
<<<<<<< HEAD
}: SideBarProps) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("");
  const [activeSubMenu, setActiveSubMenu] = React.useState("");
=======
}: SideBarProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('');
  const [activeSubMenu, setActiveSubMenu] = React.useState('');
>>>>>>> efdb20a4c957b0cbcafb4f352d9955c90b55054b
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

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
            setActiveTab={setActiveTab}
            className={`${
              showActiveTabs &&
<<<<<<< HEAD
              (item.Id === activeTab ? "avtiveTab" : "inActiveTab")
=======
              (item.Id === activeTab ? 'avtiveTab' : 'inActiveTab')
>>>>>>> efdb20a4c957b0cbcafb4f352d9955c90b55054b
            } hover-List`}
            item={item}
            key={item.Id}
            showActiveTabs={showActiveTabs}
            backgroundColor={`${backgroundColor}`}
            setActiveSubMenu={setActiveSubMenu}
            activeSubMenu={activeSubMenu}
          />
        ))}
      </List>
    </div>
  );

  return (
<<<<<<< HEAD
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar style={{ backgroundColor: "#343A40" }} position="fixed">
=======
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar style={{ backgroundColor: '#343A40' }} position="fixed">
>>>>>>> efdb20a4c957b0cbcafb4f352d9955c90b55054b
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
<<<<<<< HEAD
            sx={{ mr: 2, display: { sm: "none" } }}
=======
            sx={{ mr: 2, display: { sm: 'none' } }}
>>>>>>> efdb20a4c957b0cbcafb4f352d9955c90b55054b
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {!Responsive ? (
        <Box
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
<<<<<<< HEAD
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
=======
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
>>>>>>> efdb20a4c957b0cbcafb4f352d9955c90b55054b
                width: drawerWidth,
              },
            }}
            PaperProps={{
              style: {
                backgroundColor,
                color,
<<<<<<< HEAD
                width: "max-content",
                minWidth: "245px",
=======
                width: 'max-content',
                minWidth: '245px',
>>>>>>> efdb20a4c957b0cbcafb4f352d9955c90b55054b
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            anchor={position}
            variant="permanent"
            sx={{
<<<<<<< HEAD
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
=======
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
>>>>>>> efdb20a4c957b0cbcafb4f352d9955c90b55054b
                width: drawerWidth,
              },
            }}
            open
            PaperProps={{
              style: {
                backgroundColor,
                color,
<<<<<<< HEAD
                width: "max-content",
                minWidth: "245px",
=======
                width: 'max-content',
                minWidth: '245px',
>>>>>>> efdb20a4c957b0cbcafb4f352d9955c90b55054b
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      ) : (
        <ResponsiveSideBar
          MenuItems={MenuItems}
<<<<<<< HEAD
          position={"left"}
=======
          position="left"
>>>>>>> efdb20a4c957b0cbcafb4f352d9955c90b55054b
          showArrowIcon={showArrowIcon}
          title={title}
          image={image}
          backgroundColor={backgroundColor}
          color={color}
          window={window}
          tooltip={tooltip}
          showActiveTabs={showActiveTabs}
        />
      )}
    </Box>
  );
<<<<<<< HEAD
};

SideBar.defaultProps = {
  activeIndicatorClass: "activeTab",
=======
}

SideBar.defaultProps = {
  activeIndicatorClass: 'activeTab',
>>>>>>> efdb20a4c957b0cbcafb4f352d9955c90b55054b
};
