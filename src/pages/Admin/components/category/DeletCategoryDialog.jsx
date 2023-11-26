import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { LinearProgress, } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { toast } from "react-toastify";
import { apiUrl } from '../../../../constans/url';
import axios from "axios";
import { useHeaders } from '../../../../hooks/useHeaders';

export default function DeletCategoryDialog( { title, id } ) {
    const headers = useHeaders()

    const [ open, setOpen ] = React.useState( false );
    const handleClickOpen = () => { setOpen( true ); };
    const handleClose = () => { setOpen( false ); };

    const [ loading, setLoaing ] = React.useState( false )
    const handelDelete = async () => {
        setLoaing( true )
        await axios.delete( apiUrl + `deleteCategory/${id}`, { headers: headers } ).then( () => {
            toast.success( `تم الحذف` )
            setLoaing( false )
            window.location.reload();
        } ).catch( ( err ) =>
            toast.error( err.response.data.message ) )
        setLoaing( false )
    }

    return (
        <div style={ { direction: "rtl" } }>
            <div onClick={ handleClickOpen }>
                <Button color="warning"><DeleteIcon />حذف</Button>
            </div>
            <Dialog open={ open } onClose={ handleClose } >
                <DialogTitle style={ { direction: "rtl" } }>حذف التصنيف { title }</DialogTitle>
                <DialogContent>
                    <DialogContentText style={ { marginBottom: "30px" } }>
                        إن عملية الحذف هذه لا يمكن الرجوع عنها وستبقى الكورسات المنسوبة للتصنيف كما هية ولكن لا تنتمي إلى التصنيف القديم
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button disabled={ loading } color="warning" onClick={ handleClose }>إلغاء</Button>
                    <Button disabled={ loading } variant="contained" color="error" onClick={ handelDelete }>حذف</Button>
                </DialogActions>
                { loading ?
                    <LinearProgress />
                    : <div></div>
                }
            </Dialog>
        </div>
    );
}