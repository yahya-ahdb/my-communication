import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button, Chip, Pagination } from '@mui/material';

import ArticleCard from './ArticleCard';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useGetAllArticleCategoryQuery, useGetArticleByCategoryIdMutation, useGetArticlesQuery } from '../../store/RtkSlices/articles';
import { useHeaders } from '../../hooks/useHeaders';
import Loader from '../../components/utils/Loader';
import { apiStorge } from '../../constans/url';


// import photo from "../../../public/landing.webp"


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



const DrawerHeader = styled( 'div' )( ( { theme } ) => ( {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing( 0, 1 ),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
} ) );





// eslint-disable-next-line react/prop-types
export default function PersistentDrawerRight( { pages } ) {
    const navigate = useNavigate();
    const theme = useTheme();
    const [ open, setOpen ] = useState( false );

    const handleDrawerOpen = () => { setOpen( true ); };
    const handleDrawerClose = () => { setOpen( false ); };

    const goToHome = () => { navigate( "/" ) }

    const headers = useHeaders()
    const location = useLocation();
    const currentPath = location.pathname;
    const [ currentData, setCurrentData ] = useState( [] )
    const [ page, setPage ] = useState( 1 )
    const [ idCategory, setIdCategory ] = useState( 4 )
    const { isLoading, data, status } = useGetArticlesQuery( page )

    const { data: category } = useGetAllArticleCategoryQuery( { headers: headers } )
    const [ getArticleByCategoryId, { data: ArticleBycategory, isLoading: LoadingArticletByCategoyr } ] = useGetArticleByCategoryIdMutation()


    const handelClickCategory = ( id ) => { getArticleByCategoryId( id ) }

    const handelGetAll = () => { setCurrentData( data ) }



    useEffect( () => {
        if ( ArticleBycategory && ArticleBycategory?.data ) { setCurrentData( ArticleBycategory ) }
    }, [ ArticleBycategory ] )

    useEffect( () => {
        if ( data && data?.data ) { setCurrentData( data ) }
    }, [ data ] )


    console.log( currentData )

    return (
        <div style={ { position: "relative" } }>


            <Box sx={ { display: 'flex' } } style={ { direction: "ltr" } }>
                <CssBaseline />

                <Button size='large' onClick={ handleDrawerOpen } color="inherit" aria-label="open drawer" edge="end" sx={ { ...( open && { display: 'none' } ), position: "absolute", right: "40px" } }>
                    <MenuOpenIcon />  تصنيف المقالات
                </Button>

                <Main open={ open }>
                    <DrawerHeader />

                    <div>


                        <div className='achievements-container container'>

                            { currentData?.data?.map( ( article, index ) => {
                                return <ArticleCard key={ index } title={ article.title } date={ article.updated_at } category={ article.category?.value }
                                    img={ apiStorge + article?.image?.id + "/" + article?.image?.file_name } id={ article?.id } />
                            } ) }

                        </div>
                        <div style={ { display: "flex", justifyContent: "center" } }>

                            { currentData?.total && Number( currentData?.total ) > 10 ?
                                <Pagination disabled={ isLoading } onChange={ ( e, value ) => setPage( value ) } count={ Math.ceil( data?.total / data?.per_page ) } shape="rounded" />
                                : <div></div> }
                        </div>
                    </div>




                </Main>
                <Drawer
                    variant="persistent" anchor="right" open={ open }
                    sx={ {
                        width: open ? 0 : drawerWidth,
                        flexShrink: 0,
                        zIndex: open ? 90 * 90 : -1,

                        // position:"relative",
                        '& .MuiDrawer-paper': {
                            width: open ? drawerWidth : 0,
                            position: 'absolute',
                            border: open ? "1px solid rgba(0, 0, 0, 0.12)" : "none"
                        },

                        '& .MuiPaper-root': {
                            width: open ? drawerWidth : 0,
                            position: 'absolute'
                        },
                    } }>

                    <DrawerHeader onClick={ handleDrawerClose } style={ { cursor: "pointer" } }>
                        <Button size='larges'>
                            { theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon /> }
                            إخفاء
                        </Button>
                    </DrawerHeader>
                    <Divider>
                        <Chip label="التصنيفات" />
                    </Divider>
                    <List >
                        <ListItem onClick={ handelGetAll } disablePadding >
                            <ListItemButton >
                                <ListItemText primary={ "الجميع" } />
                            </ListItemButton>
                        </ListItem>

                        { category?.map( ( cat, index ) => {
                            return (
                                <ListItem onClick={ () => handelClickCategory( cat?.id ) } disablePadding key={ index }>
                                    <ListItemButton >
                                        <ListItemText primary={ cat?.value } />
                                    </ListItemButton>
                                </ListItem>
                            )
                        } ) }



                    </List>


                </Drawer>
            </Box >
            { isLoading || LoadingArticletByCategoyr || status === "pending" ? <Loader /> : <div></div> }
        </div>
    );
}
