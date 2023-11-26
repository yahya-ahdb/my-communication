import { useEffect, useState } from "react";
import LayoutAdmin from "../../components/LayoutAdmin"
import { useHeaders } from '../../../../hooks/useHeaders';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";
import "../../style.css"
import { Autocomplete, LinearProgress, TextField } from "@mui/material";
import axios from "axios";
import { apiUrl } from "../../../../constans/url";
import { toast } from "react-toastify";
import avatar from "../../../../../public/avatar.png"
import { useLocation, useNavigate } from "react-router-dom";
import { useGetAllArticleCategoryQuery, useGetArticleByIdQuery } from "../../../../store/RtkSlices/articles";

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




export default function EditArticle() {
    const headers = useHeaders()
    const navigate = useNavigate();
    const { state } = useLocation();
    const { data: options, isLoading: LoadingOption } = useGetAllArticleCategoryQuery( { headers: headers } )
    const { isLoading, data, status } = useGetArticleByIdQuery( state.id )

    console.log( data )



    const [ titleArticle, settitleArticle ] = useState( state.title )
    // const [ category, setCategoyr ] = useState( state.category)
    const [ value, setValue ] = useState( state.category );
    const [ inputValue, setInputValue ] = useState( state.category );

    const [ img, setImg ] = useState( state.img )
    const [ slectedFile, setSlectedFile ] = useState( null )

    const [ text, setText ] = useState( "" )
    const [ loading, setLoading ] = useState( false );


    useEffect( () => {
        if ( data && data?.content ) {
            setText( data?.content )
        }
    }, [ data ] )

    function onImageChange( event ) {
        if ( event.target.files && event.target.files[ 0 ] )
            setImg( URL.createObjectURL( event.target.files[ 0 ] ) )
        setSlectedFile( event.target.files[ 0 ] )
    }
    const handelCloseImage = () => {
        setImg( avatar )
        setSlectedFile( null )
    }
    const handelSubmit = async () => {
        setLoading( true )
        const formData = new FormData()
        if ( !titleArticle || !inputValue || !text ) {
            toast.error( "الرجاء إكمال جميع البيانات" )
            setLoading( false )
            return
        }
        if ( img === state.img ) {
            formData.append( "title", titleArticle )
            formData.append( "category", inputValue )
            formData.append( "content", text )
        } else {
            formData.append( "title", titleArticle )
            formData.append( "category", inputValue )
            formData.append( "content", text )
            formData.append( "image", slectedFile )
        }
        const dataValue = Object.fromEntries( formData.entries() )
        console.log( 'dataValue', dataValue )
        console.log( slectedFile )
        console.log( state.id )


        await axios.post( apiUrl + `updateArticle/${state.id}`, formData, { headers: { ...headers, "Content-Type": "multipart/form-data" } } ).then( () => {
            toast.success( `تم تعديل ${titleArticle}` )
            settitleArticle( "" )
            setText( "" ); setText( "" ); setValue( "" ); setInputValue( "" )
            setLoading( false )
            setTimeout(()=>{
                navigate("/admin-Articles")
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
                <h1 >تعديل المقال </h1>
            </div>
            <div className="categories-container">
            </div>
            <div className='container form-addCourse' >

                <h3 className="text-center text-warning">
                    معلومات المقال <i className="fa-solid fa-book"></i>
                </h3>

                <div className="mb-3">
                    <label htmlFor="titleArticle" className="form-label">
                        عنوان المقال
                    </label>
                    <input value={ titleArticle } onChange={ ( e ) => settitleArticle( e.target.value ) } type="text" name="text" className="form-control" id="titleArticle" />
                </div>




                <div className="mb-3">
                    <label htmlFor="titleArticle" className="form-label">
                        تصنيف المقال
                    </label>

                    <Autocomplete
                        id="free-solo-demo"
                        freeSolo
                        onChange={ ( event, newValue ) => { setValue( newValue ) } }
                        value={ value }
                        size="small"
                        style={ { background: "white", direction: "rtl", textAlign: "right" } }
                        inputValue={ inputValue }
                        dir="rtl"
                        inputMode=""
                        disabled={ loading }
                        onInputChange={ ( event, newInputValue ) => { setInputValue( newInputValue ) } }
                        options={ options?.map( ( option ) => option.value ) }
                        renderInput={ ( params ) => <TextField dir="rtl"
                            size="small" { ...params } /> }
                    />
                </div>


                <div className='mb-3 upload-photo'>
                    { img !== avatar ? <i onClick={ handelCloseImage } className="fa-regular fa-circle-xmark " style={ { margin: "10px", cursor: "pointer" } }></i> : <div></div> }
                    { img === avatar ? <span className='text-gray-500'>صورة المقال</span> : null }
                    <label htmlFor='upload-photo' style={ { cursor: "pointer", width: "200px" } }>
                        <img src={ img } alt='' width={ 200 } height={ 200 } />
                    </label>
                    <input id='upload-photo' type='file' name='photo' onChange={ onImageChange } style={ { display: "none" } } />
                </div>



                <div className="mb-3" style={ { margin: " 0" } }>
                    <label className="form-label">
                        تفاصيل المقال
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
                        : <div>loading ..</div> }
                </div>



                <button disabled={ loading } onClick={ handelSubmit } className="btn btn-warning text-white px-4 py-2">
                    تعديل المقال
                </button>
                { loading ?
                    <LinearProgress style={ { marginTop: "10px" } } /> : <div></div>
                }
            </div>

        </div>
    } />
    );
}