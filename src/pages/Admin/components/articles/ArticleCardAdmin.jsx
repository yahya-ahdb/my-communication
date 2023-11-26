import { EditNotifications } from "@mui/icons-material"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { LinearProgress, } from '@mui/material';
import { toast } from "react-toastify";
import { apiUrl } from '../../../../constans/url';
import axios from "axios";
import { useHeaders } from '../../../../hooks/useHeaders';
import { useState } from "react";
// key={ index } title={ article.title } img={ article.image } date={ article.updated_at } category={ article.category.value }
function ArticleCardAdmin( { title, img, date, category, id } ) {

    const headers = useHeaders()
    const navgite = useNavigate()
    const goToDetalis = () => {
        navgite(
            `/Articles_Details`,
            {
                state: {
                    title, img, category, id
                }
            }
        )
    }
    const goToEdite = () => {
        navgite( `/admin-EidtArticles`, { state: { title, img, id, date, category } } )
    }
    const [ open, setOpen ] = useState( false );
    const handleClickOpen = () => { setOpen( true ); };
    const handleClose = () => { setOpen( false ); };
    const [ loading, setLoaing ] = useState( false )
    const handelDelete = async () => {
        setLoaing( true )
        await axios.delete( apiUrl + `deleteArticle/${id}`, { headers: headers } ).then( () => {
            toast.success( `تم الحذف` )
            setLoaing( false )
            window.location.reload();
        } ).catch( ( err ) =>
            toast.error( err.response.data.message ) )
        setLoaing( false )
    }
    return (
        <div className='achievements-card' style={ { maxWidth: "300px", display: "flex", flexDirection: "column", background: "#F7F8FB" } }>
            <div onClick={ goToDetalis } style={ { position: "relative" } }>
                <div className='overlay'>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </div>
                <img src={img } width={ 300 } height={ 300 } style={ { borderRadius: "10px" } } />
            </div>
            <div>{ category }</div>
            <h5 style={ { padding: "20px 10px" } }>{ title }</h5>
            <div>
                <Button onClick={ goToEdite } ><EditIcon />تعديل</Button>
                <Button color="warning" onClick={ handleClickOpen }><DeleteIcon />حذف</Button>
            </div>

            <Dialog open={ open } onClose={ handleClose } >
                <DialogTitle style={ { direction: "rtl" } }>حذف المقال { title }</DialogTitle>
                <DialogContent>
                    <DialogContentText style={ { marginBottom: "30px", direction: "rtl" } }>
                        إن عملية الحذف هذه لا يمكن الرجوع عنها وستفقد معلومات المقال
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

export default ArticleCardAdmin