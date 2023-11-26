import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import VideoPlayer from '../../components/utils/Video'
import { HTMLDisplay } from '../../components/utils/HTMLDisplay';
import { useIsBuyMutation } from '../../store/RtkSlices/coursesSlice';
import { useHeaders } from '../../hooks/useHeaders';
import { useCurriculaCompletedMutation } from '../../store/RtkSlices/curriculumSlice';

function Curriculum() {
    const location = useLocation()?.state
    const headers = useHeaders()
    const [isBuy,{data :dataCheck}] = useIsBuyMutation();
    const [curriculaCompleted]= useCurriculaCompletedMutation()
    useEffect(() => {
      isBuy({headers :headers , id :location?.course_id})
      curriculaCompleted({headers :headers})
        window.scrollTo(0, 0);
      }, []);
  return (
    <div style={{minHeight :"73vh"}} >
    {location?.free =="1" ? <VideoPlayer id={location?.video_link} />
    :dataCheck == "1"  &&<VideoPlayer id={location?.video_link} />
    }
        <div className='container mt-3' >
        <h3>{location?.title}</h3>
        <HTMLDisplay html={location?.description} />
        </div>
    </div>
  )
}

export default Curriculum