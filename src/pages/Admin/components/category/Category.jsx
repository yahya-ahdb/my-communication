/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditCategoryDialog from './EditCategoryDialog';
import DeletCategoryDialog from './DeletCategoryDialog';

export default function Category( { title, id } ) {
    return (
        <Card sx={ { maxWidth: 345 } }>
            <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                    { title }
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                    وصف التصنيف إن هاذا الوصف سيظهر فقط عند الدخول إلى التصنيف
                </Typography> */}
            </CardContent>
            <CardActions>
                {/* <Button ><EditIcon />تعديل</Button> */ }
                <EditCategoryDialog title={ title } id={id}/>
                <DeletCategoryDialog title={ title } id={id}/>

            </CardActions>
        </Card>
    );
}
