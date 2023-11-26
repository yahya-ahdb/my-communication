import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { LinearProgress } from '@mui/material';
import { useHeaders } from '../../../../hooks/useHeaders';
import { useGetEmployeeByIdMutation } from '../../../../store/RtkSlices/employSlice';
import { apiStorge } from '../../../../constans/url';



export default function EmployBar( { id, userId, first_name, last_name, image , email } ) {
    const headers = useHeaders()
    const [getEmployeeById, { data, isLoading }] = useGetEmployeeByIdMutation()
    const handleOpen =()=>{
        getEmployeeById({ headers: headers, id: id })
    }
    function createMarkup( data ) { return { __html: data }; }
    const [ open, setOpen ] = useState( false );
    const handleClickOpen = () => { setOpen( true ); };
    const handleClose = () => { setOpen( false ); };
    return (
        <div >
            <List onClick={handleOpen} sx={ { mb: 2 } }>
                <div >
                    <ListItem button onClick={ handleClickOpen } sx={ { background: '#3f51b50d', borderRadius: "8px", minWidth: "180px" } } >
                        <ListItemAvatar >
                            <Avatar alt="Profile Picture" src={ image } />
                        </ListItemAvatar>
                        <ListItemText primary={ first_name + " " + last_name } secondary={ email } />
                    </ListItem>
                </div>

            </List>



            <div style={ { direction: "rtl" } }>
                <Dialog open={ open } onClose={ handleClose } >
                    <DialogTitle style={ { direction: "rtl", minWidth: "320px" } }>تفاصيل حساب { first_name + " " + last_name }</DialogTitle>
                    <DialogContent>
                    { !image?.endsWith( "undefined" ) ? <img width={ 210 } height={ 210 } alt="Profile Picture" src={ image } /> : <div></div> }
                        { data ? <div className='getByIdAbout'>
                            <div dangerouslySetInnerHTML={ createMarkup( data?.about ) }>

                            </div>
                            <div style={ { display: "flex", direction: 'rtl',color:"#5c5c5e" } }>
                                <div>تاريخ الإنشاء : </div>
                                { data?.created_at.slice( 0, 10 ) }
                            </div>
                        </div> : <div></div> }

                    </DialogContent>
                    <DialogActions>
                        <Button color="warning" onClick={ handleClose }>إلغاء</Button>
                    </DialogActions>
                    { isLoading ? <LinearProgress /> : <div></div> }
                </Dialog>
            </div>
        </div>
    );
}