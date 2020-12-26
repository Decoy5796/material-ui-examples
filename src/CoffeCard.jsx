import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
  Avatar,
  IconButton,
} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import { makeStyles } from '@material-ui/core/styles';

const CoffeCard = (props) => {
  const { avatarUrl, title, subTitle, description, imageUrl } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarUrl} />}
        action={
          <IconButton aria-label='settings'>
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subTitle}
      />
      <CardMedia style={{ height: '150px' }} image={imageUrl} />
      <CardContent>
        <Typography variant='body2' component='p'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>BUY NOW</Button>
        <Button size='small'>OFFER</Button>
      </CardActions>
    </Card>
  );
};

export default CoffeCard;
