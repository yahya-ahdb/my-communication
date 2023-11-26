import { useNavigate } from "react-router-dom";
// import AchievementsCardAdmin from "../../components/achievements/AchievementsCardAdmin";
import LayoutAdmin from "../../components/LayoutAdmin"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Pagination } from "@mui/material";
import { useState } from "react";
import { useGetArticlesQuery } from "../../../../store/RtkSlices/articles";
import ArticleCardAdmin from "../../components/articles/ArticleCardAdmin";
import { apiStorge } from "../../../../constans/url";
import Loader from "../../../../components/utils/Loader";

function AdminArticles() {
    const navgite = useNavigate()

    const goToCreate = () => { navgite( "/admin-AddArticles" ) }

    const [ page, setPage ] = useState( 1 )
    const { isLoading, data, status } = useGetArticlesQuery( page )

    return (
        <div><LayoutAdmin pages={
            <div className="container">
                <div style={ { display: "flex", justifyContent: "space-between", marginBottom: "40px", flexWrap: "wrap" } }>
                    <h1 >مقالات الأكاديمية</h1>
                    <div onClick={ goToCreate }>
                        <div className="btn btn-warning text-white p-2 fs-5 ">إنشاء مقال <PersonAddIcon /></div>
                    </div>
                </div>
                <div className="categories-container">
                    { data?.data?.map( ( article, index ) => {
                        return <ArticleCardAdmin key={ index } title={ article.title } id={ article?.id }
                            img={ apiStorge + article?.image?.id + "/" + article?.image?.file_name }
                            date={ article.updated_at } category={ article.category.value } />
                    } ) }
                    {/* <ArticleCardAdmin id={ 1 } title="أفقٌ جديد لطلبة وخريجي هندسة الاتصالات في الأردن" img="678.jpg" /> */ }
                </div>
                <div style={ { display: "flex", justifyContent: "center", direction: "ltr", margin: "50px 0" } }>

                    { data?.total && Number( data?.total ) > 10 ?
                        <Pagination disabled={ isLoading } onChange={ ( e, value ) => setPage( value ) } count={ Math.ceil( data?.total / data?.per_page ) } shape="rounded" />
                        : <div></div> }
                </div>
                { isLoading || status === "pending" ? <Loader /> : <div></div> }

            </div>
        }

        /></div>
    )
}

export default AdminArticles