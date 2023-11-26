import { useNavigate } from "react-router-dom";
import CourseCard from "../../components/course/CourseCard"
import LayoutAdmin from "../../components/LayoutAdmin"
import QueueIcon from '@mui/icons-material/Queue';
import { useHeaders } from "../../../../hooks/useHeaders";
import { useGetAllCourseQuery } from "../../../../store/RtkSlices/adminSlice";
import { apiStorge } from "../../../../constans/url";
import { Pagination } from "@mui/material";
import { useState } from "react";
import Loader from "../../../../components/utils/Loader";

function AdminCourses() {
    const navigate = useNavigate();

    const headers = useHeaders()
    const [ page, setPage ] = useState( 1 )
    const { data, isLoading ,status} = useGetAllCourseQuery(  page )
    return (
        <div><LayoutAdmin pages={
            <div className="container">
                <div style={ { display: "flex", justifyContent: "space-between", marginBottom: "40px", flexWrap: "wrap" } }>
                    <h1 >الكورسات</h1>
                    <div  onClick={ () => navigate( "/admin-Addcourse" ) }  >
                        <div  onClick={ () => navigate( "/admin-Addcourse" ) }  className="btn btn-warning text-white p-2 fs-5 ">
                        <span  onClick={ () => navigate( "/admin-Addcourse" ) }  >
                        إنشاء كورس 
                        </span>
                        <QueueIcon /></div>
                    </div>
                </div>
                <div className="categories-container" style={ { alignItems: "stretch" } }>
                    { data?.data?.map( ( el ) => {
                        return <CourseCard key={ el?.id } id={ el?.id } name={ el?.name } image={ apiStorge + el?.image?.id + "/" + el?.image?.file_name } description={ el?.description }
                            cost={ el?.cost } level={ el?.level } category_id={ el?.category_id } teacher_id={ el?.teacher_debend?.id } overview={ el?.overview } discount={ el?.discount }
                        />

                    } ) }


                    { isLoading || status === "pending"? <Loader /> : <div></div> }
                </div>
                { data?.total && Number( data?.total ) > 10 ?
                    <div style={ { margin: "80px auto",display:"flex",justifyContent:"center",direction:"ltr" } }>

                        <Pagination disabled={ isLoading } onChange={ ( e, value ) => setPage( value ) } count={ Math.ceil( data?.total / data?.per_page ) } shape="rounded" />
                    </div>
                    : <div></div> }
            </div>
        }

        /></div>
    )
}

export default AdminCourses