import LayoutAdmin from "../../components/LayoutAdmin"
import { useHeaders } from "../../../../hooks/useHeaders";
import { useGetAllArticleCategoryQuery } from "../../../../store/RtkSlices/articles";
import CategoryOfArticle from "../../components/categoryOfArticle/categoryOfArticle";
import AddCategoryArticle from "../../components/categoryOfArticle/AddCategoryArticle";
import Loader from "../../../../components/utils/Loader";

function ArticlesCategory() {
    const h1Clicke = () => {
        console.log( "one" )
    }
    const headers = useHeaders()
    const { data, isLoading, status } = useGetAllArticleCategoryQuery( { headers: headers } )
    return (
        <div><LayoutAdmin pages={
            <div className="container">
                <div style={ { display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "40px" } }>
                    <h1 onClick={ h1Clicke }>تصنيفات المقالات</h1>
                    <AddCategoryArticle />
                </div>
                <div className="categories-container">
                    { data ? data?.map( ( el ) => {
                        return <CategoryOfArticle key={ el?.id } title={ el?.value } id={ el?.id } />
                    } )
                        : <div>loading ...</div>
                    }
                </div>
                {isLoading?<Loader />:<div></div>}
            </div>
        }

        /></div>
    )
}

export default ArticlesCategory