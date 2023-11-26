import "./style.css"
import AchievementsCard from './AchievementsCard'
import { useGetAchievementsQuery } from "../../store/RtkSlices/achievementSlice"
import { useState } from "react"
import { apiStorge } from "../../constans/url"
import { Pagination } from "@mui/material"
import Loader from "../../components/utils/Loader"

function AchievementsPage() {
    const [ page, setPage ] = useState( 1 )
    const { isLoading, data, status } = useGetAchievementsQuery( page )
    return (
        <div>
            <div className='Landing-Achievements mb-3'>
                <div className='Landing-Achievements-overLay'></div>
                <div className='content'>
                    <h2>
                        <span>إنجازات الأكاديمية</span><br />
                        <p>تجد هنا الإنجازات الخاصة الأكاديمية</p>
                    </h2>
                </div>
            </div>
            <div className='achievements-container container'>
                { data?.data?.map( ( el, index ) => {
                    return <AchievementsCard key={ index } id={ el.id } img={ apiStorge + el?.image?.id + "/" + el?.image?.file_name } title={ el.title } />
                } ) }
                {/* <AchievementsCard id={ 2 } img={ "678.jpg" } title={ "أفقٌ جديد لطلبة وخريجي هندسة الاتصالات في الأردن" } /> */ }
            </div>
                <div style={ { display: "flex", justifyContent: "center",direction:"ltr" } }>

                    { data?.total && Number( data?.total ) > 10 ?
                        <Pagination disabled={ isLoading } onChange={ ( e, value ) => setPage( value ) } count={ Math.ceil( data?.total / data?.per_page ) } shape="rounded" />
                        : <div></div> }
                </div>
                { isLoading || status === "pending" ? <Loader /> : <div></div> }
        </div>

    )
}

export default AchievementsPage