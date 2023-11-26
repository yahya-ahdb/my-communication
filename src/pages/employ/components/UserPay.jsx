/* eslint-disable react/prop-types */
import { Button, LinearProgress, TableCell } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AppsIcon from '@mui/icons-material/Apps';
import { useState } from 'react';
import { toast } from "react-toastify";

import axios from "axios";
import avatar from "../../../../public/avatar.png"
import { apiUrl } from '../../../constans/url';
import { useHeaders } from '../../../hooks/useHeaders';
// id={ row.id } name={ row.first_name + " " + row.last_name } email={ row.user?.email } phone={ row.phon }
export default function UserPay( { id, name, email, phone } ) {
    const headers = useHeaders()
    const [ open, setOpen ] = useState( false );
    const [ creditor, setCreditor ] = useState( "" )
    const [ methodPay, setMethodPay ] = useState( "" )
    const [ img, setImg ] = useState( avatar )
    const [ slectedFile, setSlectedFile ] = useState( null )
    const [ loading, setLoaing ] = useState( false )

    const handleClickOpen = () => {setOpen( true )}

    const handleClose = () => {setOpen( false )}

    const handelAddBatch = async () => {
        setLoaing( true )
        // setLoaing(false)
        console.log( id )
        console.log( methodPay )
        console.log( creditor )
        console.log( slectedFile )
        if ( !id || !methodPay || !creditor ) {
            toast.error( "من فضلك أكمل البيانات" )
            return
        }
        setLoaing( true )
        const formData = new FormData()
        if ( !slectedFile && !img ) {

            formData.append( "student_id", id )
            formData.append( "creditor", creditor )
            formData.append( "via", methodPay )
            formData.append( "image", slectedFile )
        }
        else {
            formData.append( "student_id", id )
            formData.append( "creditor", creditor )
            formData.append( "via", methodPay )
        }
        await axios.post( apiUrl + `addMoneyManual`, formData,{headers: { ...headers, "Content-Type": "multipart/form-data" }}).then( () => {
            toast.success( `تم الإضافة` )
            setOpen(false)
            setLoaing( false )
        } ).catch( ( err ) =>
            toast.error( err.response.data.message ) )
        setLoaing( false )

    }

    const handelCloseImage = () => {
        setImg( avatar )
        setSlectedFile( null )
    }
    function onImageChange( event ) {
        if ( event.target.files && event.target.files[ 0 ] )
            setImg( URL.createObjectURL( event.target.files[ 0 ] ) )
        setSlectedFile( event.target.files[ 0 ] )
    }
    return (
        <div>

            <TableCell align="right" style={ { display: "flex", width: "100%", border: "none" } }><Button onClick={ handleClickOpen } variant='outlined' size='small' color='success' >إضافة</Button>
            </TableCell>
            <Dialog
                open={ open }
                onClose={ handleClose }
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    إضافة دفعة
                </DialogTitle>

                <DialogContent>
                    <DialogContentText style={ { marginBottom: "30px" } }>
                        قم بالتواصل مع صاحب الاتسفسار واضغط تم لكي لا يتم التواصل معه من قبل موظف آخر
                    </DialogContentText>
                    <div style={ { display: "flex", flexDirection: "column", gap: "10px", justifyContent: "space-between" } }>
                        <div style={ { textAlign: "center", fontWeight: "600", color: "#154875", fontSize: "1.3rem" } }>{ name }</div>
                        <div style={ { direction: "ltr", display: "flex", justifyContent: "space-between", gap: "0.6rem" } }>
                            <div style={ { textAlign: "left", color: "gray" } }>{ email }</div>
                            <div style={ { textAlign: "left", color: "#00729c" } }>{ phone }</div>
                        </div>
                        <div className="mb-3" style={ { direction: 'rtl' } }>
                            <label htmlFor="creditor" className="form-label">
                                طريقة الدفع
                            </label>
                            <div className='input-group flex-nowrap flex-row-reverse'>
                                <input value={ methodPay } onChange={ ( e ) => setMethodPay( e.target.value ) } type="text" name="creditor" className="form-control" id="nameCourse" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2"><AppsIcon /></span>
                            </div>
                        </div>
                        <div className="mb-3" style={ { direction: 'rtl' } }>
                            <label htmlFor="creditor" className="form-label">
                                قيمة الدفعة
                            </label>
                            <div className='input-group flex-nowrap flex-row-reverse'>
                                <input value={ creditor } onChange={ ( e ) => setCreditor( e.target.value ) } type="number" name="creditor" className="form-control" id="nameCourse" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2"><AttachMoneyIcon /></span>
                            </div>
                        </div>
                        <div className='mb-3 upload-photo' style={ { direction: 'rtl' } }>
                            { img !== avatar ? <i onClick={ handelCloseImage } className="fa-regular fa-circle-xmark " style={ { margin: "10px", cursor: "pointer" } }></i> : <div></div> }
                            { img === avatar ? <span className='text-gray-500'>صورة الإشعار</span> : null }
                            <label htmlFor='upload-photo' style={ { cursor: "pointer", width: "200px" } }>
                                <img src={ img } alt='' width={ 200 } height={ 200 } />
                            </label>
                            <input id='upload-photo' type='file' name='photo' onChange={ onImageChange } style={ { display: "none" } } />
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button disabled={ loading } color='warning' onClick={ handleClose }>إلغاء</Button>
                    <Button disabled={ loading } variant='contained' color='success' onClick={ handelAddBatch } autoFocus >إضافة</Button>
                </DialogActions>
                { loading ?
                    <LinearProgress /> : <div></div>
                }
            </Dialog>
        </div>





    )
}
