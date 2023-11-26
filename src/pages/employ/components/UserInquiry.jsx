/* eslint-disable react/prop-types */
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContentText, LinearProgress } from '@mui/material';
import { useHeaders } from '../../../hooks/useHeaders';
import "../style.css"
import { toast } from "react-toastify";

import axios from "axios";
import { apiUrl } from '../../../constans/url';


export default function UserInquiry( { id, name, email, message, phone } ) {
    const headers = useHeaders()

    const [ open, setOpen ] = useState( false );
    const [ loading, setLoading ] = useState( false );

    const handleClickOpen = () => { setOpen( true ); };
    const handleClose = () => { setOpen( false ); };

    const handelDone = async () => {
        setLoading( true )
        await axios.post( apiUrl + `accebtQuestion/${id}`, { headers: headers } ).then( () => {
            toast.success( `تم إزالة الاستفسار الرجاء الرد على الاستفسار في أسرع وقت` )
            setLoading( false )
            window.location.reload();
        } ).catch( ( err ) =>
            toast.error( err.response.data.message ) )
        setLoading( false )
    }
    return (
        <div >

            <div className='userInquiryCard' onClick={ handleClickOpen }>
                <div style={ { display: "flex", gap: "10px", justifyContent: "space-between" } }>
                    <Avatar alt="Profile Picture" />
                    <div style={ { fontWeight: "600", color: "#154875", fontSize: "1.3rem" } }>{ name }</div>
                    <div style={ { direction: "ltr", display: "flex", flexDirection: "column", gap: "0.6rem" } }>
                        <div style={ { textAlign: "left", color: "gray" } }>{ email }</div>
                        <div style={ { textAlign: "left", color: "#00729c" } }>{ phone }</div>
                    </div>
                </div>
                <div style={ { textAlign: "center" } }>
                    { message }
                </div>

            </div>



            <div style={ { direction: "rtl", minWidth: "28rem" } }>
                <Dialog open={ open } onClose={ handleClose } >
                    <DialogTitle style={ { direction: "rtl", minWidth: "320px" } }>تفاصيل الاتسفسار </DialogTitle>

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
                            <div style={ { textAlign: "center", margin: "20px auto" } }>{ message }</div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button color="warning" onClick={ handleClose }>إلغاء</Button>
                        <Button color="success" onClick={ handelDone }>تم</Button>
                    </DialogActions>
                    { loading ? <LinearProgress /> : <div></div> }
                </Dialog>
            </div>
        </div>
    );
}