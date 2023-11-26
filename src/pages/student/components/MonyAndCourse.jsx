import React from 'react'
import { useGetMyCoursesQuery, useGetMyMoneyQuery } from '../../../store/RtkSlices/studentSlice'
import { useHeaders } from '../../../hooks/useHeaders'
import Card from '../../../components/utils/Card'
import { apiStorge } from '../../../constans/url'
import { useNavigate } from 'react-router-dom'
import Loader from '../../../components/utils/Loader'

function MonyAndCourse() {
    const headers = useHeaders()
    const {data ,isLoading} = useGetMyCoursesQuery({headers :headers})
    const {data : dataMo} = useGetMyMoneyQuery({headers : headers})
    const navigate = useNavigate()
    return (
    <div>
    {isLoading ? 
    <Loader />
    :

        <>
        <h3>لديك في محفظتك : {dataMo}$</h3>
        <div className='container d-flex justify-content-between align-items-center flex-wrap' >
            {data?.map((item)=>(
                <div key={item.id} >
                <Card 
                   image={apiStorge + item?.course?.image?.id + "/" +item?.course?.image?.file_name} 
                   title={item?.course?.name}
                   titleBtn={"احضر الكورس"}
                   eventBtn={()=>navigate("/course/"+ item?.course?.id)}
                />
                </div>
            ))}
        </div>
        </>
            
    }
    </div>
  )
}

export default MonyAndCourse