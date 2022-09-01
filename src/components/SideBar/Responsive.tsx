import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuItemList from './MenuItemList';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer: any = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  // boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
type SideBarProps = {
  MenuItems: any;
  position: "left" | "right";
  iconHide?: boolean;
  showActiveTabs?: boolean;
  window?: () => Window;
  title?: string;
  image?: string;
  backgroundColor?: string;
  color?: string;
};

export default function ResponsiveSideBar({
  position,
  iconHide,
  showActiveTabs,
  window,
  title,
  MenuItems,
  image,
  backgroundColor,
  color,
  ...props
}: SideBarProps) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(null);

  const HideShowIcon = iconHide ? "showIcon" : "hideIcon";

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const handleActiveTab = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <Box sx={{ display: "flex", border: "1px solid red" }} >
      <CssBaseline />
      <AppBar

        position="fixed"
        open={open}
        style={{ backgroundColor: "#343A40", zIndex: 0 }}
      >
        <Toolbar></Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        anchor={position}
        PaperProps={{
          style: {
            backgroundColor,
            color,


          },
        }}
      >
        <DrawerHeader style={{ zIndex: 0 }}>
          <Toolbar style={{ marginLeft: "2px" }}>
            <h2>{title}</h2>
            <img src={image} className="logoSize" />
          </Toolbar>

          <IconButton onClick={handleDrawerClose}>
            {open ? (
              <ChevronLeftIcon style={{ color }} className='LeftArrow' />
            ) : (
              <ChevronRightIcon style={{ color }} className='RightArrow' />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {MenuItems.map((item: any, index: number) => (
            <MenuItemList
              item={item}
              drawerOpen={open}
              showActiveTabs={
                index === activeIndex ? "avtiveTab" : "inActiveTab"
              }
              onHandleActiveTab={() => handleActiveTab(index)}
              HideShowIcon={HideShowIcon}
              backgroundColor={`${backgroundColor} `}
            />
          ))}
        </List>

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
