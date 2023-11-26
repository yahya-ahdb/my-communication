import "../style.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import MailIcon from "@mui/icons-material/Mail";
import { Chip } from "@mui/material";
// import { ImageOutlined } from '@mui/icons-material';
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import Logout from "../../../components/utils/Logout";
import ArticleIcon from '@mui/icons-material/Article';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import HikingIcon from '@mui/icons-material/Hiking';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import GroupsIcon from '@mui/icons-material/Groups';
// import photo from "../../../public/landing.webp"
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

const drawerWidth = 240;

const Main = styled( "main", { shouldForwardProp: ( prop ) => prop !== "open" } )(
  ( { theme, open } ) => ( {
    flexGrow: 1,
    padding: theme.spacing( 3 ),
    transition: theme.transitions.create( "margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    } ),
    marginRight: -drawerWidth,
    ...( open && {
      transition: theme.transitions.create( "margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      } ),
      marginRight: 0,
    } ),
  } )
);

const AppBar = styled( MuiAppBar, {
  shouldForwardProp: ( prop ) => prop !== "open",
} )( ( { theme, open } ) => ( {
  transition: theme.transitions.create( [ "margin", "width" ], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  } ),
  ...( open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create( [ "margin", "width" ], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    } ),
    marginRight: drawerWidth,
  } ),
} ) );

const DrawerHeader = styled( "div" )( ( { theme } ) => ( {
  display: "flex",
  alignItems: "center",
  padding: theme.spacing( 0, 1 ),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
} ) );

// eslint-disable-next-line react/prop-types
export default function PersistentDrawerRight( { pages } ) {
  const navigate = useNavigate();
  const theme = useTheme();
  const [ open, setOpen ] = useState( true );
  const [ openLog, setOpenLog ] = useState( false );

  const handleDrawerClose = () => {
    setOpen( false );
  };
  const goToHome = () => {
    navigate( "/" );
  };

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Box sx={ { display: "flex" } } style={ { direction: "ltr" } }>
      <CssBaseline />
      <AppBar position="fixed" open={ open } style={ { background: "#154875" } }>
        <Toolbar className="container">
          <Typography
            
            variant="h6"
            noWrap
            sx={ { flexGrow: 1 } }
            component="div"
            
          >
            <div className="logo" >
              <img src="/logo.svg" alt="" onClick={ goToHome } style={{cursor:"pointer"}}/>
            </div>
          </Typography>
          <IconButton
            onClick={ () => setOpen( true ) }
            color="inherit"
            aria-label="open drawer"
            edge="end"
            sx={ { ...( open && { display: "none" } ) } }
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={ open }>
        <DrawerHeader />
        <div style={ { direction: "rtl" } }>{ pages }</div>
      </Main>
      <Drawer
        variant="persistent"
        anchor="right"
        open={ open }
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
          "& .MuiDrawer-paper": {
            // width: open ? drawerWidth : 0,
            position: "absolute",
            border: open ? "1px solid rgba(0, 0, 0, 0.12)" : "none",
          },
          "& .MuiPaper-root": {
            width: open ? drawerWidth : 0,
            position: "absolute",

          },
        } }
      >
        <DrawerHeader>
          <IconButton onClick={ handleDrawerClose }>
            { theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            ) }
          </IconButton>
        </DrawerHeader>

        <Divider>
          <Chip label="الحسابات" />
        </Divider>
        <List>
          <ListItem
            disablePadding
            className={
              currentPath === "/admin-addEmploy" ? `AdminActiveLink` : ""
            }
          >
            <ListItemButton onClick={ () => navigate( "/admin-addEmploy" ) }>
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary={ "حسابات الموظف" } />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            className={
              currentPath === "/admin-AddTecher" ? `AdminActiveLink` : ""
            }
          >
            <ListItemButton onClick={ () => navigate( "/admin-AddTecher" ) }>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={ "حسابات المدرسين" } />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            className={
              currentPath === "/admin-AddStudent" ? `AdminActiveLink` : ""
            }
          >
            <ListItemButton onClick={ () => navigate( "/admin-AddStudent" ) }>
              <ListItemIcon>
                <HikingIcon />
              </ListItemIcon>
              <ListItemText primary={ "حسابات الطالب" } />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            className={
              currentPath === "/admin-AddMarketing" ? `AdminActiveLink` : ""
            }
          >
            <ListItemButton onClick={ () => navigate( "/admin-AddMarketing" ) }>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary={ "حسابات التسويق" } />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            className={
              currentPath === "/admin-sendMessage" ? `AdminActiveLink` : ""
            }
          >
            <ListItemButton onClick={ () => navigate( "/admin-sendMessage" ) }>
              <ListItemIcon>
                <ForwardToInboxIcon />
              </ListItemIcon>
              <ListItemText primary={ "رسالة لجميع الطلاب" } />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider>
          <Chip label="الكورسات" />
        </Divider>
        <List>
          <ListItem
            disablePadding
            className={
              currentPath === "/admin-courses" ||
                currentPath === "/admin-Addcourse" ||
                currentPath.startsWith( "/admin-Editecourse" ) ||
                currentPath === "/admin-Editecourse"
                ? `AdminActiveLink`
                : ""
            }
          >
            <ListItemButton onClick={ () => navigate( "/admin-courses" ) }>
              <ListItemIcon>
                <ImportContactsIcon />
              </ListItemIcon>
              <ListItemText primary={ "الكورسات" } />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            className={
              currentPath === "/admin-category" ? `AdminActiveLink` : ""
            }
          >
            <ListItemButton onClick={ () => navigate( "/admin-category" ) }>
              <ListItemIcon>
                <AutoAwesomeMotionIcon />
              </ListItemIcon>
              <ListItemText primary={ "تصنيفات الكورسات" } />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider>
          <Chip label="المقالات" />
        </Divider>
        <List>
          <ListItem disablePadding className={currentPath === "/admin-Articles" ||currentPath === "/admin-AddArticles" ||currentPath === "/admin-EidtArticles"? `AdminActiveLink`: ""}>
            <ListItemButton onClick={ () => navigate( "/admin-Articles" ) }>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary={ "المقالات" } />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            className={
              currentPath === "/admin-ArticlesCategory" ? `AdminActiveLink` : ""
            }
          >
            <ListItemButton onClick={ () => navigate( "/admin-ArticlesCategory" ) }>
              <ListItemIcon>
              
                <NewspaperIcon />
              </ListItemIcon>
              <ListItemText primary={ "تصنيفات المقالات" } />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider>
          <Chip label="غير ذلك" />
        </Divider>
        <List>
          <ListItem
            disablePadding
            className={
              currentPath === "/admin-Achievements" ||
                currentPath === "/admin-AddAchievements" ||
                currentPath === "/admin-EditAchievements"
                ? `AdminActiveLink`
                : ""
            }
          >
            <ListItemButton onClick={ () => navigate( "/admin-Achievements" ) }>
              <ListItemIcon>
              
                <MilitaryTechIcon />
              </ListItemIcon>
              <ListItemText primary={ "الإنجازات" } />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            className={
              currentPath === "/admin-workshop" ||
                currentPath === "/admin-workshop" ||
                currentPath === "/admin-workshop"
                ? `AdminActiveLink`
                : ""
            }
          >
            <ListItemButton onClick={ () => navigate( "/admin-workshop" ) }>
              <ListItemIcon>
                <HomeWorkIcon />
              </ListItemIcon>
              <ListItemText primary={ "الورشات" } />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider>
          <Chip label="تسجيل الخروج" />
        </Divider>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={ () => {
                setOpenLog( true )
              } }
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={ "تسجيل الخروج" } />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      { openLog &&
        <Logout open={ openLog } handleClose={ () => setOpenLog( false ) } />
      }

    </Box>
  );
}
