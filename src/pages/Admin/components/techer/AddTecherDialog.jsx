import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { LinearProgress, } from '@mui/material';
import { useState } from 'react';
import { AccountCircle } from '@mui/icons-material';
import HttpsIcon from '@mui/icons-material/Https';
import { useHeaders } from '../../../../hooks/useHeaders';
import { toast } from "react-toastify";
import { apiUrl } from '../../../../constans/url';
import axios from "axios";

export default function AddTecherDialog() {
    const [ open, setOpen ] = useState( false );
    const [ email, setEmail ] = useState( "" );
    const [ password, setPassowrd ] = useState( "" );
    const [ confirmPassword, setConfirmPassword ] = useState( "" );
    const [ loading, setLoaing ] = useState( false )
    const headers = useHeaders()
    const handleClickOpen = () => { setOpen( true ); };
    const handleClose = () => { setOpen( false ); };

    const handleEditeCategroy = async () => {
        if ( password !== confirmPassword ) {
            toast.error( "كلمة المرور غير متطابقة" )
            return
        }
        if ( !email || !password || !confirmPassword ) {
            toast.error( "من فضلك أكمل البيانات" )
            return
        }
        setLoaing( true )
        const formData = new FormData()
        formData.append( "email", email )
        formData.append( "password", password )
        await axios.post( apiUrl + `createTeacher`, formData ,{headers: { ...headers, "Content-Type": "multipart/form-data" }}).then( () => {
            toast.success( `تم الإضافة` )
            // window.location.reload();
            setLoaing( false )
        } ).catch( ( err ) =>
            toast.error( err.response.data.message ) )
        setLoaing( false )
        handleClose()
    }



    return (
        <div>
            <div onClick={ handleClickOpen }>
                <div className="btn btn-warning text-white p-2 fs-5 ">إنشاء حساب <PersonAddIcon /></div>
            </div>
            <Dialog open={ open } onClose={ handleClose } >
                <DialogTitle style={ { direction: "rtl" } }>إنشاء حساب مدرس جديد</DialogTitle>
                <DialogContent dir="rtl">
                    <DialogContentText style={ { marginBottom: "30px" } } dir="rtl">
                        للاشتراك في هذا الموقع، يرجى إدخال الأسم و عنوان بريدك الإلكتروني هنا. نحن
                        سوف نرسل التحديثات في بعض الأحيان.
                    </DialogContentText>



                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            البريد الإلكتروني
                        </label>
                        <div className='input-group flex-nowrap flex-row-reverse'>
                            <input disabled={ loading } value={ email } onChange={ ( e ) => setEmail( e.target.value ) } type="email" name="email" className="form-control" id="nameCourse" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span className="input-group-text" id="basic-addon2"><AccountCircle /></span>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            كلمة المرور                        </label>
                        <div className='input-group flex-nowrap flex-row-reverse'>
                            <input disabled={ loading } value={ password } onChange={ ( e ) => setPassowrd( e.target.value ) } type="password" name="password" className="form-control" id="nameCourse" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span className="input-group-text" id="basic-addon2"><HttpsIcon /></span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">
                            تأكيد كلمة المرور
                        </label>
                        <div className='input-group flex-nowrap flex-row-reverse'>
                            <input disabled={ loading } value={ confirmPassword } onChange={ ( e ) => setConfirmPassword( e.target.value ) } type="password" name="confirmPassword" className="form-control" id="nameCourse" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span className="input-group-text" id="basic-addon2"><HttpsIcon /></span>
                        </div>
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button color="warning" onClick={ handleClose }>إلغاء</Button>
                    <Button variant="contained" color="success" onClick={ handleEditeCategroy }>اشتراك</Button>
                </DialogActions>
                { loading ?
                    <LinearProgress /> : <div></div>
                }
            </Dialog>
        </div>
    );
}