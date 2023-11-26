import Loader from "../../../../components/utils/Loader";
import { apiStorge } from "../../../../constans/url";
import { useHeaders } from "../../../../hooks/useHeaders";
import { useGetAllMarketerQuery } from "../../../../store/RtkSlices/adminSlice";
import LayoutAdmin from "../../components/LayoutAdmin"
import AddmarketerDialog from "../../components/marketer/AddmarketerDialog";
import MarketerBar from "../../components/marketer/MarketerBar";
function AminAddMarketing() {
    const headers = useHeaders()
    const { isLoading, data: dataMarketer, status: statusTechers } = useGetAllMarketerQuery( { headers: { ...headers, "Content-Type": "multipart/form-data" } } )
    const h1Clicke = () => {
        console.log( "one" )
    }
    console.log( dataMarketer )
    return (
        <div><LayoutAdmin pages={
            <div className="container">
                <div style={ { display: "flex", justifyContent: "space-between", marginBottom: "40px", flexWrap: "wrap" } }>
                    <h1 onClick={ h1Clicke }>حسابات التسويق</h1>
                    <AddmarketerDialog />
                </div>
                <div className="categories-container">
                { dataMarketer?.data?.map( ( el ) => {
                        return <MarketerBar key={ el?.id } id={ el?.id } userId={ el?.user_id } first_name={ el?.first_name } last_name={ el?.last_name }
                            image={ apiStorge + el?.image?.id + "/" + el?.image?.file_name } />
                    } ) }
                    {/* id, userId, first_name, last_name, image */ }
                    {/* <MarketerBar first_name="First" last_name="last" /> */}

                </div>

                {isLoading?<Loader />:<div></div>}
            </div>
        }

        /></div>
    )
}

export default AminAddMarketing