
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import mysql from '../Assets/Img/mysql.png'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              D/D
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Aprende html y css"
          subheader="marzo 28 de 2021"
        />
        <CardMedia
          className={classes.media}
          image={mysql}
          title="Mysql"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            MySQL es la base de datos de código abierto más popular del mundo. Ya sea que se trate de una propiedad web en rápido crecimiento, un ISV de tecnología o una gran empresa,MySQL puede ayudarlo de manera rentable a brindar aplicaciones
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
