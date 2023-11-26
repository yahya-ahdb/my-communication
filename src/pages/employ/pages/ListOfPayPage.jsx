import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LayoutEmploy from "../components/LayoutEmploy"
import { useHeaders } from "../../../hooks/useHeaders";
import { useState } from "react";
import { useGetAllStudentQuery } from '../../../store/RtkSlices/employSlice';
import { Avatar, Button } from '@mui/material';
import UserPay from '../components/UserPay';
import "../style.css"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Loader from '../../../components/utils/Loader';


function ListOfPayPage() {
    const headers = useHeaders()
    const [ page, setPage ] = useState( 1 )    
  const [search,setSearch] =useState("");
    const h1Clicke = () => {
        console.log( "one" )
    }
    const { data, isLoading, status } = useGetAllStudentQuery( { page , headers , search : search ? `&for_search=${search}` : ""} )

    const [ studentId, setStudentId ] = useState( "" )
    const [ emailStudent, setEmailStudent ] = useState( "" )
    const [ studentNmae, setStudentNmae ] = useState( "" )
    const [ studentPhone, setStudentPhone ] = useState( "" )


    const [ open, setOpen ] = useState( false );
    const handleClickOpen = ( id, email, name, phon ) => {
        setOpen( true )
        setStudentId( id ); setEmailStudent( email ); setStudentNmae( name ); setStudentPhone( phon )
        console.log( id )

    };
    const handleClose = () => { setOpen( false ) };



    return (
        <div><LayoutEmploy pages={
            <div className="container">
                <div style={ { display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "40px" } }>
                    <h1 onClick={ h1Clicke }>دفعات</h1>
                </div>
                <div className="p-2" style={{ background: "#f5f5f5" }}>
              <input
                style={{ maxWidth: "320px" }}
                placeholder="ابدأ البدث"
                type="search"
                onChange={(e)=>setSearch(e.target.value)}
                className="form-control"
              />
            </div>
                <div className="categories-container" style={ { direction: "ltr" } }>
                    <TableContainer component={ Paper }>
                        <Table sx={ { minWidth: 650 } } aria-label="simple table">
                            <TableHead>
                                <TableRow className='thTable'>
                                    <TableCell align='center' style={ { background: "#2196f340" } }>الأسم</TableCell>
                                    <TableCell align='center' style={ { background: "#607d8b5e" } }>البريد الإلكترني</TableCell>
                                    <TableCell align="center" style={ { background: "#ffc10736" } }>رقم الهاتف</TableCell>
                                    <TableCell align="right" style={ { background: "#adddd9" } }>إضافة دفعة</TableCell>
                                    {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */ }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { data?.data?.map( ( row ) => (
                                    <TableRow key={ row.id } sx={ { '&:last-child td, &:last-child th': { border: 0 } } }>

                                        <TableCell onClick={ () => handleClickOpen( row.id, row.user?.email, row.first_name + " " + row.last_name, row.phone ) } component="td" scope="row" style={ { cursor: "pointer" } } className='nameTable'>
                                            <TableCell style={ { display: 'flex', alignItems: "center", gap: "1rem", border: "none", color: "#154875", fontWeight: "bold" } }>
                                                <Avatar alt="Profile Picture" />
                                                { row.first_name + " " + row.last_name }
                                            </TableCell>
                                        </TableCell>
                                        <TableCell align='center' style={ { color: "gray" } }>{ row.user?.email }</TableCell>
                                         <TableCell align="right">{ row?.phone }</TableCell> 
                                        {/* <TableCell align="center">{ "0912345678" }</TableCell> */}
                                        {/* <TableCell align="right">{ row.carbs }</TableCell>  */ }
                                        <TableCell >

                                            <UserPay id={ row?.user_id } name={ row.first_name + " " + row.last_name } email={ row.user?.email } phone={ row.phon } />
                                        </TableCell>
                                        {/* <TableCell align="right">{ row.protein }</TableCell> */ }
                                    </TableRow>
                                ) ) }
                            </TableBody>
                        </Table>
                    </TableContainer>



                </div>
                <Dialog
                    open={ open }
                    onClose={ handleClose }
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        تفاصيل الطالب
                    </DialogTitle>
                    <DialogContent>UserPay
                        <DialogContentText style={ { marginBottom: "30px" } }>
                            قم بالتواصل مع صاحب الاتسفسار واضغط تم لكي لا يتم التواصل معه من قبل موظف آخر
                        </DialogContentText>
                        <div style={ { display: "flex", flexDirection: "column", gap: "10px", justifyContent: "space-between" } }>
                            <div style={ { textAlign: "center", fontWeight: "600", color: "#154875", fontSize: "1.3rem" } }>{ studentNmae }</div>
                            <div style={ { direction: "ltr", display: "flex", justifyContent: "space-between", gap: "0.6rem" } }>
                                <div style={ { textAlign: "left", color: "gray" } }>{ emailStudent }</div>
                                <div style={ { textAlign: "left", color: "#00729c" } }>{ studentPhone }</div>
                            </div>
                            {/* <div style={ { textAlign: "center", margin: "20px auto" } }>{ message }</div> */ }
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={ handleClose }>إلغاء</Button>
                    </DialogActions>
                </Dialog>
                { isLoading ? <Loader /> : <div></div> }
            </div>
        }
        /></div>
    )
}

export default ListOfPayPage