import { useState } from "react";
import { useGetAllStudentQuery } from "../../../../store/RtkSlices/employSlice";
import LayoutAdmin from "../../components/LayoutAdmin"
import { useHeaders } from "../../../../hooks/useHeaders";
import { apiStorge } from "../../../../constans/url";
import StudentBar from "../../components/student/StudentBar";
import Loader from "../../../../components/utils/Loader";
import { Button } from "@mui/material";
function AdminAddStudent() {
    const headers = useHeaders()
    const [ page, setPage ] = useState( 1 )
    const { data, isLoading, status } = useGetAllStudentQuery( { page, headers } )
    const h1Clicke = () => {
        console.log( "one" )
    }
    return (
        <div><LayoutAdmin pages={
            <div className="container">
                <div style={ { display: "flex", justifyContent: "space-between", marginBottom: "40px", flexWrap: "wrap" } }>
                    <h1 onClick={ h1Clicke }>حسابات الطلاب</h1>
                    
                </div>
                <div className="categories-container">
                    { data?.data?.map( ( el ,ind) => {
                        return <StudentBar  key={ el?.id } id={ el?.user_id } userId={ el?.user_id } first_name={ el?.first_name } last_name={ el?.last_name }
                        image={ apiStorge + el?.image?.id + "/" + el?.image?.file_name } />
                    } ) }

                </div>
                <div className="container my-3">
        <Button
          disabled={isLoading || page == 1}
          onClick={() => {
            setPage(page - 1);
          }}
          variant="outlined"
          className="fs-4 ms-3"
        >
          {"<"}
        </Button>
        <Button
          disabled={isLoading || page == data?.last_page}
          onClick={() => {
            setPage(page + 1);
          }}
          variant="outlined"
          className="fs-4"
        >
          {">"}
        </Button>
      </div>
                {isLoading?<Loader />:<div></div>}
            </div>
        }

        /></div>
    )
}

export default AdminAddStudent