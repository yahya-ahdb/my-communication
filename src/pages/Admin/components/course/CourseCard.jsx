import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardMedia } from '@mui/material';
import { EditNotifications } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
// id={ el?.id } name={ el?.name } image={ el?.image } description={ el?.description }
//  cost={ el?.cost } level={ el?.level } category_id={ el?.category_id } teacher_id={ el?.teacher_debend?.id }
// eslint-disable-next-line react/prop-types
export default function CourseCard( { id, name, image, description, cost, level, category_id, teacher_id, overview, discount } ) {
    const navgite = useNavigate()
    const goToEdit = () => {
        navgite(
            `/admin-Editecourse/${id}`,
            {
                state: {
                    id, name, image, description, cost, level, category_id, teacher_id, overview, discount
                }
            }
        )
    }
    const goToDetalis = () => { navgite( `/course/${id}` ) }
    return (
        <div style={ { cursor: "pointer", display: "flex", flexDirection: "column", background: "#3f51b50d", maxWidth: 300, boxShadow: "2px 7px 10px #00000029" } }>

            <img onClick={ goToDetalis } style={ { width: "100%", height: "100%", background: "white" } } src={ image.endsWith( "undefined" ) ? "noimage.webp" : image } />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    { name }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    { description }
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={ goToEdit }><EditNotifications />تعديل</Button>
                {/* <EditCoursePage /> */ }

            </CardActions>
        </div>
    );
}
