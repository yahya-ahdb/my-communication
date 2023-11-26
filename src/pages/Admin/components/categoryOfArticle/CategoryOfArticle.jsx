/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import EditeCategoryArticle from './EditeCategoryArticle';
import DeleteCategroyArticle from './DeleteCategroyArticle';

export default function CategoryOfArticle( { title, id } ) {
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
                <EditeCategoryArticle title={ title } id={ id } />
                <DeleteCategroyArticle title={ title } id={ id } />

            </CardActions>
        </Card>
    );
}
