import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Chip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import Logout from '../../../components/utils/Logout';




const drawerWidth = 240;

const Main = styled( 'main', { shouldForwardProp: ( prop ) => prop !== 'open' } )(
    ( { theme, open } ) => ( {
        flexGrow: 1,
        padding: theme.spacing( 3 ),
        transition: theme.transitions.create( 'margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        } ),
        marginRight: -drawerWidth,
        ...( open && {
            transition: theme.transitions.create( 'margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            } ),
            marginRight: 0,
        } ),
    } ),
);

const AppBar = styled( MuiAppBar, {
    shouldForwardProp: ( prop ) => prop !== 'open',
} )( ( { theme, open } ) => ( {
    transition: theme.transitions.create( [ 'margin', 'width' ], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    } ),
    ...( open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create( [ 'margin', 'width' ], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        } ),
        marginRight: drawerWidth,
    } ),
} ) );

const DrawerHeader = styled( 'div' )( ( { theme } ) => ( {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing( 0, 1 ),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
} ) );





// eslint-disable-next-line react/prop-types
export default function LayoutEmploy( { pages } ) {
    const navigate = useNavigate();
    const theme = useTheme();
    const [ open, setOpen ] = useState( true );
    const [ openLog, setOpenLog ] = useState(false);

    const handleDrawerOpen = () => { setOpen( true ); };
    const handleDrawerClose = () => { setOpen( false ); };
    const goToHome = () => { navigate( "/" ) }


    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <Box sx={ { display: 'flex' } } style={ { direction: "ltr" } }>
            <CssBaseline />
            <AppBar position="fixed" open={ open } style={ { background: "#154875" } }>
                <Toolbar className='container'>
                    <Typography onClick={ goToHome } variant="h6" noWrap sx={ { flexGrow: 1 } } component="div" style={ { cursor: "pointer" } }>
                        <div className="logo">
                            <img src="logo.webp" alt="" />
                        </div>
                    </Typography>
                    <IconButton onClick={ handleDrawerOpen } color="inherit" aria-label="open drawer" edge="end" sx={ { ...( open && { display: 'none' } ) } }>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Main open={ open }>
                <DrawerHeader />
                <div style={ { direction: 'rtl' } }>
                    { pages }
                </div>
            </Main>
            <Drawer
                variant="persistent" anchor="right" open={ open }
                // sx={ {
                //     width: drawerWidth,
                //     flexShrink: 0,
                //     '& .MuiDrawer-paper': { width: drawerWidth, },
                // } }
                sx={ {
                    width: drawerWidth,
                    flexShrink: 0,
                    zIndex: open ? 90 * 90 : -1,
                    // position:"relative",
                    '& .MuiDrawer-paper': {
                        // width: open ? drawerWidth : 0,
                        position: 'absolute',
                        border: open ? "1px solid rgba(0, 0, 0, 0.12)" : "none"
                    },
                    '& .MuiPaper-root': {
                        width: open ? drawerWidth : 0,
                        position: 'absolute'
                    },
                } }
            >

                <DrawerHeader>
                    <IconButton onClick={ handleDrawerClose }>
                        { theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon /> }
                    </IconButton>
                </DrawerHeader>

                <Divider>
                    <Chip label="الطلاب" />
                </Divider>
                <List>
                    <ListItem disablePadding className={ currentPath === "/employ-InquiryPage" ? `AdminActiveLink` : "" }>
                        <ListItemButton onClick={ () => navigate( '/employ-InquiryPage' ) }>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary={ "الاستفسارات" } />
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding className={ currentPath === "/employ-ListOfPayPage" ? `AdminActiveLink` : "" }>
                        <ListItemButton onClick={ () => navigate( '/employ-ListOfPayPage' ) }>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary={ "الدفعات" } />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={ currentPath === "/employ-workshop" ? `AdminActiveLink` : "" }>
                        <ListItemButton onClick={ () => navigate( '/employ-workshop' ) }>
                            <ListItemIcon>
                            <HomeRepairServiceIcon />
                            </ListItemIcon>
                            <ListItemText primary={ "الورشات التدريبية" } />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding >
                        <ListItemButton onClick={ () =>{ setOpenLog(true)}}>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary={ "تسجيل الخروج" } />
                        </ListItemButton>
                    </ListItem>
                </List>



            </Drawer>
            {openLog &&
      <Logout open={openLog} handleClose={()=>setOpenLog(false)} />
      }
        </Box >
    );
}
