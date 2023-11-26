import { useGetAllEmployeeQuery } from "../../../../store/RtkSlices/adminSlice"
import LayoutAdmin from "../../components/LayoutAdmin"
import { useHeaders } from '../../../../hooks/useHeaders'
import { apiStorge } from "../../../../constans/url"
import AddEmployDialog from "../../components/employ/AddEmployDialog"
import EmployBar from "../../components/employ/EmployBar"
import Loader from "../../../../components/utils/Loader"

function AdminEmploy() {
    const headers = useHeaders()

    const { isLoading: isLoadingTechers, data: dataTechers,} = useGetAllEmployeeQuery( { headers: { ...headers, "Content-Type": "multipart/form-data" } } )

    return (
        <div><LayoutAdmin pages={
            <div className="container">
                <div style={ { display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "40px" } }>
                    <h1>حسابات الموظفين</h1>
                    <AddEmployDialog />
                </div>
                <div className="categories-container">
                    { dataTechers?.data?.map( ( el ) => {
                        return <EmployBar key={ el?.id } id={ el?.id } userId={ el?.user_id } first_name={ el?.first_name } last_name={ el?.last_name }
                           email={el?.user?.email} image={  el?.image?.id + "/" + el?.image?.file_name } />
                    } ) }
                    {isLoadingTechers?<Loader />:<div></div>}
                </div>
            </div>
        }

        /></div>
    )
}

export default AdminEmploy