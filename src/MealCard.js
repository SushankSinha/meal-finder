import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function MealCard({value}) {
  return (
    <Card style={{ width: "350px", height : '425px', margin : "1%", textAlign : "center", padding : '5px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={value.strMealThumb}
          alt={value.strMeal}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {value.strMeal}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" style={{width : "80%", margin : "2px auto", display : "block", fontWeight : "bold"}} >
          <a style={{textDecoration : 'none'}} href={value.strYoutube} target='_blank' rel="noreferrer" >Watch Video</a>
        </Button>
      </CardActions>
    </Card>
  );
}

export default MealCard;