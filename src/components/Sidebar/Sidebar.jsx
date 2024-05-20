import * as React from 'react';
import { createTheme, ThemeProvider, styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from "../../assets/icons/Dashboard.svg"
import TasklistIcon from '../../assets/icons/Tasklist.svg';
import PaymentsIcon from '../../assets/icons/Payments.svg';
import ServicesIcon from '../../assets/icons/Services.svg';
import TradeIcon from '../../assets/icons/Trade.svg';
import TransferIcon from '../../assets/icons/Transfer.svg';
import AccountIcon from '../../assets/icons/Account.svg';
import LogoutIcon from '../../assets/icons/Logout.svg';
import HumbergerIcon from '../../assets/icons/Humburger.svg';

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme, open }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  backgroundColor: open ? 'whitesmoke' : 'whitesmoke', // Set background color to whitesmoke when open
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: 'whitesmoke', // Set background color to whitesmoke
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

export default function MiniDrawer() {
  const muiTheme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const list = (
    <Box
      sx={{ width: 250,backgroundColor:"whitesmoke"}}
      role="presentation"
      onClick={handleDrawerClose}
      onKeyDown={handleDrawerClose}
    >
      <List sx={{backgroundColor:"whitesmoke"}}>
        <ListItem disablePadding sx={{height:"32px",backgroundColor:"whitesmoke"}}>
          <ListItemButton>
            <ListItemIcon>
              <img src={DashboardIcon} style={{ height: '20px' }} />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding sx={{height:"42px"}}>
          <ListItemButton>
            <ListItemIcon>
              <img src={TasklistIcon} style={{ height: '20px' }} />
            </ListItemIcon>
            <ListItemText primary={"Task list"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding sx={{height:"32px"}}>
          <ListItemButton>
            <ListItemIcon>
              <img src={AccountIcon} style={{ height: '20px' }} />
            </ListItemIcon>
            <ListItemText primary={"Account"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List >
        <ListItem disablePadding sx={{height:"32px"}}>
          <ListItemButton>
            <ListItemIcon>
              <img src={TransferIcon} style={{ height: '20px' }} />
            </ListItemIcon>
            <ListItemText primary={"Transfers"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding sx={{height:"32px"}}>
          <ListItemButton>
            <ListItemIcon>
              <img src={PaymentsIcon} style={{ height: '20px' }} />
            </ListItemIcon>
            <ListItemText primary={"Payments"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding sx={{height:"32px"}}>
          <ListItemButton>
            <ListItemIcon>
              <img src={ServicesIcon} style={{ height: '20px' }} />
            </ListItemIcon>
            <ListItemText primary={"Services"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding sx={{height:"32px"}}>
          <ListItemButton>
            <ListItemIcon>
              <img src={TradeIcon} style={{ height: '20px' }} />
            </ListItemIcon>
            <ListItemText primary={"Trade"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List sx={{height:"46%",backgroundColor:"whitesmoke"}}>
        <ListItem disablePadding sx={{height:"32px",marginTop:"167px",backgroundColor:"whitesmoke"}}>
          <ListItemButton>
            <ListItemIcon>
              <img src={LogoutIcon} style={{ height: '20px' }} />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex'}}>
        <CssBaseline />
        <AppBar open={open} sx={{
          backgroundColor: '#whitesmoke',
          boxShadow: "none", height: "65px", width: 63, right: 'auto', left: 0,
        }}>
          <Toolbar >
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5, height: "20px",
                ...(open && { display: 'none' }),
              }}
            >
              <img src={HumbergerIcon} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {muiTheme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          {list}
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
