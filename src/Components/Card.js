import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Context } from '../Context';

export default function CountryCard({name, img, population, region, capital}) {

  const {getInfo} = useContext(Context)

  return (
    <Card sx={{ maxWidth: 330 }} className="card" onClick={() => {getInfo(name)}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="name">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <ul className="list">
                <li>Population: <span>{population}</span></li>
                <li>Region <span>{region}</span></li>
                <li>Capital <span>{capital}</span></li>
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
