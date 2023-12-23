import { useLocation } from "react-router-dom";
import { useGetAchievementByIdQuery } from "../../store/RtkSlices/achievementSlice";
import { useEffect, useState } from "react";
import { HTMLDisplay } from "../../components/utils/HTMLDisplay";
import Loader from "../../components/utils/Loader";

function Achievements_Details() {
    const { state } = useLocation();
    const { isLoading, data, status } = useGetAchievementByIdQuery( state.id );
    const [ text, setText ] = useState( "" )
    useEffect( () => {
        if ( data && data?.content ) {
            setText( data?.content )
        }
    }, [ data ] )
    return (
        <div className="container">
            { isLoading || status === "pending" ? <Loader /> : <div></div> }
            <h1 className="my-5" >{ state.title }</h1>
            <div style={{maxWidth: 500}} >
                <img style={{width:"100%"}} src={ state.img } />
            </div>
            <HTMLDisplay html={ data?.content } />
        </div>
    )
}

export default Achievements_Details