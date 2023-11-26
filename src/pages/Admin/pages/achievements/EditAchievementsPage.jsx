import { useEffect, useState } from "react";
import LayoutAdmin from "../../components/LayoutAdmin"
import { useHeaders } from '../../../../hooks/useHeaders';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";
import "../../style.css"
import axios from "axios";
import { apiUrl } from "../../../../constans/url";
import { toast } from "react-toastify";
import avatar from "../../../../../public/avatar.png"
import { useLocation, useNavigate } from "react-router-dom";
import { useGetAchievementByIdQuery } from "../../../../store/RtkSlices/achievementSlice";
import { LinearProgress } from "@mui/material";

const module = {
    toolbar: [
        [
            { font: [] },
            { header: [ 1, 2, 3, false ] },
            { color: [] },
            { background: [] },
        ],
        [ "bold", "italic", "underline", "strike" ],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
        [ "link", "image" ],
        [ { align: [] } ],
        [ "clean" ],
    ],
}
export default function AddAchievementsPage() {

    const headers = useHeaders()
    const { state } = useLocation();
    const { isLoading, data} = useGetAchievementByIdQuery( state.id )
    const navigate = useNavigate();


    const [ titleAchievements, settitleAchievements ] = useState( state.title )


    const [ img, setImg ] = useState( state.img )
    const [ slectedFile, setSlectedFile ] = useState( null )

    const [ text, setText ] = useState( state.content )
    const [ loading, setLoading ] = useState( false );


    function onImageChange( event ) {
        if ( event.target.files && event.target.files[ 0 ] )
            setImg( URL.createObjectURL( event.target.files[ 0 ] ) )
        setSlectedFile( event.target.files[ 0 ] )
    }

    useEffect( () => {
        if ( data && data?.content ) {
            setText( data?.content )
        }
    }, [ data ] )




    const handelCloseImage = () => {
        setImg( avatar )
        setSlectedFile( null )
    }

    const handelSubmit = async () => {
        const formData = new FormData()
        console.log( state.id )
        setLoading( true )
        if ( !titleAchievements || !text ) {
            toast.error( "الرجاء إكمال جميع البيانات" )
            setLoading( false )
            return
        }
        if ( state.img === img ) {

            formData.append( "title", titleAchievements )
            formData.append( "content", text )
            console.log( "not imgae key" )
        } else {
            formData.append( "title", titleAchievements )
            formData.append( "content", text )
            formData.append( "image", slectedFile )
        }

        await axios.post( apiUrl + `updateAchievement/${state.id}`, formData,{headers: { ...headers, "Content-Type": "multipart/form-data" }} ).then( () => {
            toast.success( `تم تعديل ${state.title}` )
            settitleAchievements( "" )
            setText( "" );setImg(null)
            setLoading( false )
            setTimeout(()=>{
                navigate("/admin-Achievements")
            },1000)
        } ).catch( ( err ) =>
            toast.error( err.response.data.message
            )
        )
        setLoading( false )

    }



    return ( <LayoutAdmin pages={
        <div className="container ">
            <div style={ { display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "40px" } }>
                <h1 >تعديل الإنجاز { state.title }</h1>
            </div>
            <div className="categories-container">
            </div>
            <div className='container form-addCourse' >

                <h3 className="text-center text-warning">
                    معلومات الإنجاز <i className="fa-solid fa-book"></i>
                </h3>

                <div className="mb-3">
                    <label htmlFor="titleAchievements" className="form-label">
                        عنوان الإنجاز
                    </label>
                    <input disabled={ loading } value={ titleAchievements } onChange={ ( e ) => settitleAchievements( e.target.value ) } type="text" name="text" className="form-control" id="titleAchievements" />
                </div>




                <div className='mb-3 upload-photo'>
                    { img !== avatar ? <i onClick={ handelCloseImage } className="fa-regular fa-circle-xmark " style={ { margin: "10px", cursor: "pointer" } }></i> : <div></div> }
                    { img === avatar ? <span className='text-gray-500'>صورة الإنجاز</span> : null }
                    <label htmlFor='upload-photo' style={ { cursor: "pointer", width: "200px" } }>
                        <img src={ img } alt='' width={ 200 } height={ 200 } />
                    </label>
                    <input disabled={ loading } id='upload-photo' type='file' name='photo' onChange={ onImageChange } style={ { display: "none" } } />
                </div>



                <div className="mb-3" style={ { margin: " 0" } }>
                    <label className="form-label">
                        تفاصيل الإنجاز
                    </label>
                    { !isLoading ?
                        <div  >
                            <ReactQuill
                                value={ text }
                                onChange={ ( html ) => setText( html ) }
                                theme="snow"
                                dir="rtl"
                                style={ { background: "white" } }
                                modules={ module }
                                formats={ [ "header", "font", "size", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image", ] }
                            />
                        </div>
                        : <div>loading ..</div>
                    }
                </div>



                <button disabled={ loading } onClick={ handelSubmit } className="btn btn-warning text-white px-4 py-2">
                    تعديل
                </button>
                { loading ?
                    <LinearProgress style={ { marginTop: "10px" } } /> : <div></div>
                }
            </div>
        </div>
    } />
    );
}