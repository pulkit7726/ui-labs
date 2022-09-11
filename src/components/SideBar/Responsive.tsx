import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
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
import MenuItemList from "./MenuItemList";
import {
  Tooltip,
  Typography,
} from "@mui/material";
import "./sidebar.css";

const drawerWidth = 245;

const openedMixin = (theme: Theme): CSSObject => ({
  width: "max-content",
  minWidth: "245px",
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
    // marginLeft: drawerWidth,

    width: "max-content",
    minWidth: "245px",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer: any = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: "max-content",
  minWidth: "245px",
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
type ResponsiveProps = {
  MenuItems: any;
  position: "left" | "right";
  showArrowIcon?: boolean;
  showActiveTabs?: boolean;
  tooltip?: boolean;
  window?: () => Window;
  title?: string;
  image?: string;
  backgroundColor?: string;
  color?: string;
};

export default function ResponsiveSideBar({
  position,
  showArrowIcon,
  showActiveTabs,
  tooltip,
  window,
  title,
  MenuItems,
  image,
  backgroundColor,
  color,
  ...props
}: ResponsiveProps) {
  const [drawerOpen, drawersetOpen] = React.useState(false);
  const [activeSubMenu, setActiveSubMenu] = React.useState('');
  const HideShowArrowIcon = showArrowIcon ? "showArrowIcon" : "hideArrowIcon";
  const [activeTab, setActiveTab] = React.useState('');

  const handleDrawerClose = () => {
    drawersetOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={drawerOpen}
        style={{ backgroundColor: "#343A40", zIndex: 0 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={drawerOpen}
        anchor={position}
        PaperProps={{
          style: {
            backgroundColor,
            color,
          },
        }}
      >
        <DrawerHeader className={HideShowArrowIcon}>
          <Toolbar>
            <img src={image} className="logoSize" />
            <h2 style={{ color }}>{title}</h2>
          </Toolbar>

          <IconButton onClick={handleDrawerClose}>
            {drawerOpen ? (
              <ChevronLeftIcon
                style={{ color }}
                className={`${HideShowArrowIcon} LeftArrow`}
              />
            ) : (
              <ChevronRightIcon
                style={{ color }}
                className={`${HideShowArrowIcon} RightArrow`}
              />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          {MenuItems.map((item: any, index: number, Name: string) => (
            <Tooltip
              disableHoverListener={!tooltip || drawerOpen ? true : false}
              title={item.Name}
              placement="right"
              arrow
            >
              <li>
                <MenuItemList
                  responsive={true}
                  item={item}
                  drawerOpen={drawerOpen}
                  setActiveTab={setActiveTab}
                  className={`${showActiveTabs && (item.Id === activeTab ? "avtiveTab" : "inActiveTab")} hover-List`}
                  key={item.Id}
                  backgroundColor={`${backgroundColor}`}
                  setActiveSubMenu={setActiveSubMenu}
                  activeSubMenu={activeSubMenu}
                  showActiveTabs={showActiveTabs}
                />
              </li>
            </Tooltip>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
