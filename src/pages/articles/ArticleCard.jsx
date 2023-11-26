/* eslint-disable react/prop-types */
import PublicIcon from '@mui/icons-material/Public';
import { useNavigate } from 'react-router-dom';

export default function ArticleCard( { id,title, category, img, date  } ) {
    const navgite = useNavigate()
    const goToDetalis = () => {
        navgite(
            `/Articles_Details`,
            {
                state: {
                    title, img, category, id
                }
            }
        )
    }
    return (
        <div style={ { direction: 'rtl', boxShadow: "2px 10px 10px #0000003b" } }>
            <div className='achievements-card' style={ { maxWidth: "300px", display: "flex", flexDirection: "column", background: "#F7F8FB" } }>
                <div style={ { position: "relative" } } onClick={ goToDetalis }>
                    <div className='overlay'>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </div>
                    <div>
                    <img src={ img } width={ 300 } height={ 300 } style={ { objectFit :"contain" , borderRadius: "10px" } } />
                    </div>
                </div>
                <div className='achievements-card-details' style={ { padding: "5px" } }>
                    <span style={ { fontSize: "14px" } }>
                        { category }
                    </span>
                    <h5 style={ { padding: "" } } onClick={ goToDetalis }>
                        { title }
                    </h5>
                    <span style={ { fontSize: "12px", color: "gray", display: "flex", gap: "10px", alignItems: "center" } }><PublicIcon />
                        { date?.slice( 0, 10 ) }
                    </span>
                </div>

            </div>
        </div>
    )
}
