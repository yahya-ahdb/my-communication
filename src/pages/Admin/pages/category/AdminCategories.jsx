import Category from "../../components/category/Category"
import LayoutAdmin from "../../components/LayoutAdmin"
import AddCategoryDialog from "../../components/category/AddCategoryDialog";
import { useHeaders } from "../../../../hooks/useHeaders";
import { useGetAllCategoriesQuery } from "../../../../store/RtkSlices/adminSlice";
import Loader from "../../../../components/utils/Loader";

function AdminCategories() {
    const h1Clicke = () => {
        console.log( "one" )
    }
    const headers = useHeaders()
    const { data, isLoading, status } = useGetAllCategoriesQuery( { headers: headers } )
    // console.log( data )
    // console.log( isLoading )
    // console.log( status )

    return (
        <div><LayoutAdmin pages={
            <div className="container">
                <div style={ { display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "40px" } }>
                    <h1 onClick={ h1Clicke }>تصنيفات الكورسات</h1>
                    <AddCategoryDialog />
                </div>
                <div className="categories-container">
                    { data ? data?.map( ( el ) => {
                        return <Category key={ el?.id } title={ el?.value } id={ el?.id } />
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

export default AdminCategories