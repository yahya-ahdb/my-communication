import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { LinearProgress, } from '@mui/material';
import { toast } from "react-toastify";
import { apiUrl } from '../../../constans/url';
import axios from "axios";
import { useHeaders } from '../../../hooks/useHeaders';
import { HTMLDisplay } from '../../../components/utils/HTMLDisplay';

function DeleteCurricum({ dataDia , open , handleClose }) {
    const headers = useHeaders()
    const [ loading, setLoaing ] = React.useState( false )
    const handelDelete = async () => {
        setLoaing( true )
        await axios.delete( apiUrl + `deleteCurriculum/${dataDia?.id}`, { headers: headers } ).then( () => {
            toast.warning( `تم الحذف` )
            handleClose()
            window.location.reload()
            setLoaing( false )
        } ).catch( ( err ) =>
            toast.error( err.response.data.message ) )
        setLoaing( false )
    }
  return (
    <div style={ { direction: "rtl" } }>
    <Dialog fullWidth open={ open } onClose={ handleClose } >
        <DialogTitle style={ { direction: "rtl" } }>حذف الحلقة { dataDia?.title }</DialogTitle>
        <DialogContent>
            <DialogContentText style={ { marginBottom: "30px" }} dir="rtl" >
            <HTMLDisplay html={dataDia?.description} />
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
    )
}

export default DeleteCurricum