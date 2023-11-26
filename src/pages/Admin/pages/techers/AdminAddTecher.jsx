import { useGetAllTechersQuery } from "../../../../store/RtkSlices/adminSlice"
import AddTecherDialog from "../../components/techer/AddTecherDialog"
import LayoutAdmin from "../../components/LayoutAdmin"
import UserBar from "../../components/techer/UserBar"
import { useHeaders } from '../../../../hooks/useHeaders'
import { apiStorge } from "../../../../constans/url"
import Loader from "../../../../components/utils/Loader"

function AdminAddTecher() {
    const headers = useHeaders()

    const { isLoading: isLoadingTechers, data: dataTechers, status: statusTechers } = useGetAllTechersQuery( { headers: headers } )

    console.log( "one" )
    const h1Clicke = () => {
        console.log( "one" )
    }
    return (
        <div><LayoutAdmin pages={
            <div className="container">
                <div style={ { display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "40px" } }>
                    <h1 onClick={ h1Clicke }>حسابات المدرسين</h1>
                    <AddTecherDialog />
                </div>
                <div className="categories-container">
                    { dataTechers?.map( ( el ) => {
                        return <UserBar key={ el?.id } id={ el?.id } userId={ el?.user_id } first_name={ el?.first_name } last_name={ el?.last_name }
                            image={ apiStorge + el?.image?.id + "/" + el?.image?.file_name } />
                    } ) }

                </div>
                {isLoadingTechers?<Loader />:<div></div>}
            </div>
        }

        /></div>
    )
}

export default AdminAddTecher