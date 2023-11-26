import LayoutEmploy from "../components/LayoutEmploy"
import UserInquiry from "../components/UserInquiry";
import { useGetAllQuestionQuery } from "../../../store/RtkSlices/quirySlice";
import { useState } from "react";
import Loader from "../../../components/utils/Loader";

function InquiryPage() {
    const [ page, setPage ] = useState( 1 )
    const { data, isLoading, status } = useGetAllQuestionQuery( page )

    return (
        <div><LayoutEmploy pages={
            <div className="container">
                <div style={ { display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "40px" } }>
                    <h1>الاتسفسارات</h1>
                </div>
                <div className="categories-container">
                    { data?.data?.map( ( quiry, indx ) => {
                        return ( <UserInquiry key={ indx } id={ quiry.id } name={ quiry.name } email={ quiry.email } phone={ quiry.phone }
                            message={ quiry.message } />
                        )
                    } ) }

                </div>
                { isLoading ? <Loader /> : <div></div> }
            </div>
        }
        /></div>
    )
}

export default InquiryPage