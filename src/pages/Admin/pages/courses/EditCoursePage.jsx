// import { useState } from "react";
import { useState } from "react";
import LayoutAdmin from "../../components/LayoutAdmin"
import avatar from "../../../../../public/avatar.png"
import { useGetAllCategoriesQuery, useGetAllTechersQuery } from "../../../../store/RtkSlices/adminSlice";
import { useHeaders } from '../../../../hooks/useHeaders';
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { apiUrl } from "../../../../constans/url";
import { useLocation, useNavigate } from "react-router-dom";
import { LinearProgress } from "@mui/material";

export default function EditCoursePage() {

    const headers = useHeaders()


    const { isLoading: isLoadingCategories, data: dataCategories } = useGetAllCategoriesQuery( { headers: headers } )
    const { isLoading: isLoadingTechers, data: dataTechers } = useGetAllTechersQuery( { headers: headers } )

    // id, name, image, description, cost, level, category_id, teacher_id
    const { state } = useLocation();
    const [ nameCourse, setNameCourse ] = useState( state.name )
    const [ level, setLevel ] = useState( state.level )
    const [ cost, setCost ] = useState( state.cost )
    const [ discount, setDiscount ] = useState( state.discount )
    const [ description, setDescription ] = useState( state.description )
    const [ overview, setOverview ] = useState( state.overview )
    const [ category, setCategory ] = useState( state.category_id )
    const [ teacher, setTecher ] = useState( state.teacher_id )
    const navigate = useNavigate()
    const [ img, setImg ] = useState( state.image )
    const [ slectedFile, setSlectedFile ] = useState( "" )
    const [ loading, setLoading ] = useState( false )

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
        // if ( !nameCourse || !cost || !level || !teacher || !description || !category || !overview || !slectedFile ) {
        //     toast.error( "من فضلك أكمل البيانات" )
        //     return
        // }

        // else if ( typeof Number( cost ) !== "number" && typeof Number( discount ) === "number" ) {
        //     toast.error( "ادخل السعر بشكل صحيح" )
        //     return
        // }
        const formData = new FormData()
        if ( img === state.image ) {

            formData.append( "name", nameCourse )
            formData.append( "cost", Number( cost ) )
            formData.append( "discount", Number( discount ) )
            formData.append( "level", level )
            formData.append( "teacher_id", teacher )
            formData.append( "description", description )
            formData.append( "category_id", category )
            formData.append( "overview", overview )
            // formData.append( "image", slectedFile )
        } else {
            formData.append( "name", nameCourse )
            formData.append( "cost", Number( cost ) )
            formData.append( "discount", Number( discount ) )
            formData.append( "level", level )
            formData.append( "teacher_id", teacher )
            formData.append( "description", description )
            formData.append( "category_id", category )
            formData.append( "overview", overview )
            formData.append( "image", slectedFile )

        }
        const dataValue = Object.fromEntries( formData.entries() )
        console.log( 'dataValue', dataValue )
        setLoading( true )
        await axios.post( apiUrl + `updateCourse/${state?.id}`, formData, { headers: { ...headers, "Content-Type": "multipart/form-data" } } ).then( () => {
            toast.success( `تم تعديل ${nameCourse}` )
            setLoading( false )
            // navigate( "/admin-courses" )
        } ).catch( ( err ) =>
            toast.error( err.response.data.message ) )
    }
    return ( <LayoutAdmin pages={
        <div className="container ">
            <div style={ { display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "40px" } }>
                <h1 >تعديل الكورس { state.name }</h1>
            </div>
            <div className="categories-container">
            </div>
            <div className='container form-addCourse' >

                <h3 className="text-center text-warning">
                    معلومات الكورس <i className="fa-solid fa-book"></i>
                </h3>

                <div className="mb-3">
                    <label htmlFor="nameCourse" className="form-label">
                        اسم الكورس
                    </label>
                    <input disabled={ loading } value={ nameCourse } onChange={ ( e ) => setNameCourse( e.target.value ) } type="text" name="text" className="form-control" id="nameCourse" />
                </div>


                <div className="mb-3">
                    <label htmlFor="cost" className="form-label">
                        السعر قبل الخصم
                    </label>
                    <input disabled={ loading } value={ cost } onChange={ ( e ) => setCost( e.target.value ) } type="number" name="email" className="form-control" id="cost" />

                </div>

                <div className="mb-3">
                    <label htmlFor="costAfter" className="form-label">
                        الخصم
                    </label>
                    <input disabled={ loading } value={ discount } onChange={ ( e ) => setDiscount( e.target.value ) } type="number" name="email" className="form-control" id="costAfter" />

                </div>

                <div className="mb-3">
                    <label htmlFor="level" className="form-label">
                        المستوى
                    </label>
                    <input disabled={ loading } value={ level } onChange={ ( e ) => setLevel( e.target.value ) } type="email" name="email" className="form-control" id="level" />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        الوصف
                    </label>
                    <input disabled={ loading } value={ description } onChange={ ( e ) => setDescription( e.target.value ) } type="email" name="email" className="form-control" id="description" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        التصنيف
                    </label>
                    <select disabled={ loading } value={ category } onChange={ ( e ) => setCategory( e.target.value ) } className="form-select" aria-label="Default select example">
                        <option selected>اختر تصنيف</option>
                        { dataCategories?.map( ( el ) => {
                            return <option value={ el.id } key={ el.id }>{ el.value }</option>
                        } ) }
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        المدرس
                    </label>
                    <select disabled={ loading } value={ teacher } onChange={ ( e ) => setTecher( e.target.value ) } className="form-select" aria-label="Default select example" placeholder="">
                        <option >اختر مدرس</option>

                        { dataTechers?.map( ( el ) => {
                            return <option value={ el.user_id } key={ el.id }>{ el.first_name + " " + el.last_name }</option>
                        } ) }

                    </select>
                </div>




                <div className='mb-3 upload-photo'>
                    { img !== avatar ? <i onClick={ handelCloseImage } className="fa-regular fa-circle-xmark " style={ { margin: "10px", cursor: "pointer" } }></i> : <div></div> }
                    { img === avatar ? <span className='text-gray-500'>إضافة صورة للكورس</span> : null }
                    <label htmlFor='upload-photo' style={ { cursor: "pointer", width: "200px" } }>
                        <img src={ img } alt='' width={ 200 } height={ 200 } />
                    </label>
                    <input disabled={ loading } id='upload-photo' type='file' name='photo' onChange={ onImageChange } style={ { display: "none" } } />
                </div>


                <div className="mb-3" style={ { margin: " 0" } }>
                    <label className="form-label">
                        ملخص عن الكورس
                    </label>
                    <div  >
                        <ReactQuill theme="snow" value={ overview } onChange={ setOverview } style={ { direction: "ltr", background: "white" } } />
                    </div>
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