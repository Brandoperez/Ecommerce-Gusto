import React from 'react'
import styles from "./ItemCard.module.css";

import { Card, CardMedia, CardActions, CardContent, Typography, Button } from "@mui/material";

  import { Link } from 'react-router-dom';

export const ItemCard = ({item}) => {
  return (
    <Card sx={{ Width: 350, height: 410 }} className={styles.cardSize}>
      <CardMedia className={styles.ImgCard}   sx={{ width: 150, height: 140}}  image={item.img} title="green iguana" />
      <CardContent>
        <Typography className={styles.tituloCard} gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography className={styles.parrafoCard} variant="body2" >
          {item.description}
        </Typography>
        <Typography className={styles.precioCard} variant="body2">
         <span>$ </span>{item.price}
        </Typography>
      </CardContent>
      <CardActions className={styles.contButton}>
        <Button className={styles.botonCard} size="small">Agregar</Button>
       <Link to={`/itemDetail/${item.id}`}>
        <Button className={styles.botonCard} size="small">Ver Más</Button></Link> 
      </CardActions>
    </Card>
  )
}
