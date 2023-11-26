import { useState } from "react";
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
import { useGetAllArticleCategoryQuery } from "../../../../store/RtkSlices/articles";

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
const top100Films = [
    { title: 'أحداث مهمة في هندسة الاتصالات' },
    { title: 'إنجازات الاكاديمية' },
    { title: 'اختبارات قدرات' },
    { title: 'الفعاليات' },
    { title: 'معلومات تهم مهندس الاتصالات' },
    { title: 'مقالات تقنية' },
    { title: 'ورشات عمل مجانية' },
]
export default function AddArticles() {
    const headers = useHeaders()
    const { data, isLoading, status } = useGetAllArticleCategoryQuery( { headers: headers }  )


    const [ titleArticle, settitleArticle ] = useState( "" )
    const [ category, setCategoyr ] = useState( "" )
    const [ value, setValue ] = useState( "" );
    const [ inputValue, setInputValue ] = useState( '' );

    const [ img, setImg ] = useState( avatar )
    const [ slectedFile, setSlectedFile ] = useState( null )

    const [ text, setText ] = useState( "" )
    const [ loading, setLoading ] = useState( false );
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
        if ( !titleArticle || !inputValue || !slectedFile || !text ) {
            toast.error( "الرجاء إكمال جميع البيانات" )
            setLoading( false )
            return
        }
        formData.append( "title", titleArticle )
        formData.append( "category", inputValue )
        formData.append( "image", slectedFile )
        formData.append( "content", text )
        await axios.post( apiUrl + "createArticle", formData,{headers: { ...headers, "Content-Type": "multipart/form-data" }} ).then( () => {
            toast.success( `تم انشاء ${titleArticle}` )
            settitleArticle( "" )
            setText( "" ); setText( "" ); setValue( "" ); setInputValue( "" );setImg(null)
            setLoading( false )
            
        } ).catch( ( err ) =>
            toast.error( err.response.data.message
            )
        )
        setLoading( false )
    }



    return ( <LayoutAdmin pages={
        <div className="container ">
            <div style={ { display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "40px" } }>
                <h1 >إضافة مقال جديد</h1>
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
                    <input disabled={ loading } value={ titleArticle } onChange={ ( e ) => settitleArticle( e.target.value ) } type="text" name="text" className="form-control" id="titleArticle" />
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
                        options={ data?.map( ( option ) => option.value ) }
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
                    <input disabled={ loading } id='upload-photo' type='file' name='photo' onChange={ onImageChange } style={ { display: "none" } } />
                </div>



                <div className="mb-3" style={ { margin: " 0" } }>
                    <label className="form-label">
                        تفاصيل المقال
                    </label>
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
                </div>



                <button disabled={ loading } onClick={ handelSubmit } className="btn btn-warning text-white px-4 py-2">
                    إضافة
                </button>
                { loading ?
                    <LinearProgress style={{marginTop:"10px"}}/> : <div></div>
                }
            </div>

        </div>
    } />
    );
}