import { useNavigate } from "react-router-dom";
import AchievementsCardAdmin from "../../components/achievements/AchievementsCardAdmin";
import LayoutAdmin from "../../components/LayoutAdmin"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useGetAchievementsQuery } from "../../../../store/RtkSlices/achievementSlice";
import { useState } from "react";
import { apiStorge } from "../../../../constans/url";
import Loader from "../../../../components/utils/Loader";
import { Pagination } from "@mui/material";

function AdminAchievements() {
    const navgite = useNavigate()


    const goToCreate = () => { navgite( "/admin-AddAchievements" ) }

    const [ page, setPage ] = useState( 1 )
    const { isLoading, data, status } = useGetAchievementsQuery( page )
    return (
        <div><LayoutAdmin pages={
            <div className="container">
                <div style={ { display: "flex", justifyContent: "space-between", marginBottom: "40px", flexWrap: "wrap" } }>
                    <h1 >إنجازات الأكاديمية</h1>
                    <div onClick={ goToCreate }>
                        <div className="btn btn-warning text-white p-2 fs-5 ">إنشاء إنجاز <PersonAddIcon /></div>
                    </div>
                </div>
                <div className="categories-container">
                    { !isLoading ? data?.data?.map( ( ach, index ) => {
                        return <AchievementsCardAdmin key={ index } id={ ach?.id } title={ ach.title } content={ ach.content }
                            img={ apiStorge + ach?.image?.id + "/" + ach?.image?.file_name } />

                    } ) : <div>Loading....</div> }
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

export default AdminAchievements