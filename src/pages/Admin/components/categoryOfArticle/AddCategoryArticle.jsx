import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { LinearProgress, } from '@mui/material';
import QueueIcon from '@mui/icons-material/Queue';
import TitleIcon from '@mui/icons-material/Title';
import { useState } from 'react';
import { useHeaders } from '../../../../hooks/useHeaders';
import { toast } from "react-toastify";
import { apiUrl } from '../../../../constans/url';
import axios from "axios";
export default function AddCategoryArticle() {
    const [ open, setOpen ] = React.useState( false );
    const handleClickOpen = () => { setOpen( true ); };
    const handleClose = () => { setOpen( false ); };
    const [ titleState, setTitleState ] = useState( "" )
    const [ loading, setLoaing ] = useState( false )
    const headers = useHeaders()
    const handleEditeCategroy = async () => {
        setLoaing( true )
        await axios.post( apiUrl + `createArticleCategory`, { "value": titleState },{headers: { ...headers, "Content-Type": "multipart/form-data" }} ).then( () => {
            toast.success( `تم الإضافة` )
            window.location.reload();
            setLoaing( false )
        } ).catch( ( err ) =>
            toast.error( err.response.data.message ) )
        setLoaing( false )
        handleClose()
    }
    return (
        <div style={ { direction: "ltr" } }>
            <div onClick={ handleClickOpen }>
                <div className="btn btn-warning text-white p-2 fs-5 ">إنشاء تصنيف <QueueIcon /></div>
            </div>
            <Dialog open={ open } onClose={ handleClose }  >
                <DialogTitle style={ { direction: "rtl" } }>إنشاء تصنيف جديد</DialogTitle>
                <DialogContent dir="rtl" >
                    <DialogContentText style={ { marginBottom: "30px", minWidth: "500px" } } >
                        لإضافة تصنيف جديد الرجاء إدخال اسم و وصف التصنيف
                    </DialogContentText>
                    <div className="mb-3">
                        <label htmlFor="nameCourse" className="form-label">
                            اسم التصنيف
                        </label>
                        <div className='input-group flex-nowrap flex-row-reverse'>
                            <input disabled={ loading } value={ titleState } onChange={ ( e ) => setTitleState( e.target.value ) } type="text" name="text" className="form-control" id="nameCourse" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span className="input-group-text" id="basic-addon2"><TitleIcon /></span>
                        </div>
                    </div>


                </DialogContent>
                <DialogActions>
                    <Button color="warning" onClick={ handleClose }>إلغاء</Button>
                    <Button variant="contained" color="success" onClick={ handleEditeCategroy }>إضافة</Button>
                </DialogActions>
                { loading ?
                    <LinearProgress /> : <div></div>
                }
            </Dialog>
        </div>
    );
}