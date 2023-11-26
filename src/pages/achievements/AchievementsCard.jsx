import { useNavigate } from "react-router-dom"

function AchievementsCard( { title, img, id } ) {
    const navgite = useNavigate()
    const goToDetalis = () => {
        navgite(
            `/Achievements_Details`,
            {
                state: {
                    title, img, id
                }
            }
        )
    }
    return (
        <div onClick={ goToDetalis } className='achievements-card' style={ { maxWidth: "300px", display: "flex", flexDirection: "column", background: "#F7F8FB" } }>
            <div style={ { position: "relative" } }>
                <div className='overlay'>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </div>
                <img src={ img } width={ 300 } height={ 300 } style={ { borderRadius: "10px" } } />
            </div>
            <h5 style={ { padding: "20px 10px" } }>
                { title }
            </h5>

        </div>
    )
}

export default AchievementsCard