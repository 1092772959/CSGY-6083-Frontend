import React, {useState} from 'react';

import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

import './PostItem.scss';

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import IconButton from '@mui/material/IconButton';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Answer = ({
  answer: {
    ans_id,
    ques_id,
    uid,
    username,
    date,
    ans_body,
    isBest,
    thumb_ups,
    likedByUser
  },
}) => {

  const curUId = parseInt(localStorage.getItem('uid'));

  const [liked, setLiked] = useState(likedByUser);
  const [curLikes, setCurLikes] = useState(thumb_ups);

  const handleLike = () => {
    if (liked === 1) {
      setLiked(0);
      setCurLikes(curLikes - 1);
    } else {
      setLiked(1);
      setCurLikes(curLikes + 1);
    }
    // send request
  };

  return (
    <Grid item xs={12} >
      <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
              <Grid container >
                <Typography variant="subtitle1" color="text.secondary">
                  {date} 
                </Typography>

                <Typography variant="subtitle1" color="text.first">
                  &nbsp;by&nbsp;
                </Typography>
                <Link to={`/user/${uid}`}>
                  <Typography variant="subtitle1" color="text.first">
                    {username}
                  </Typography>
                </Link>
              </Grid>
              <Grid container>
                <Typography variant="subtitle1" paragraph>
                    {ans_body}
                  </Typography>
              </Grid>
              <Divider />
              <br />
              <Grid container >
                <Grid item xs={2}>
                  <Grid container>
                  <Grid item xs={2} sx={{ml: 1}}>
                  <IconButton
                      // size="small"
                      edge="start"
                      color="inherit"
                      aria-label="open drawer"
                      onClick={handleLike}
                      >
                        {liked === 1? <ThumbUpAltIcon/> : <ThumbUpOffAltIcon/>}
                    </IconButton>
                  </Grid>
                  <Grid item xs={1}>
                    {/* <br/> */}
                    <Grid sx={{ p: 1 }}>

                      <Typography >{curLikes}</Typography>
                    </Grid>
                  </Grid>
                    {/* </Fab> */}
                  </Grid>
                  {/* <Stack direction="row" spacing={2}> */}
                    {/* <Fab size="small"> */}
                  {/* </Stack> */}
                </Grid>
                <Grid item xs={8}>
                  {/* empty grid */}
                </Grid>
                {isBest ? 
                  <Grid item xs={2}>
                    <Chip label="Best Answer" color="primary" variant="outlined" />
                  </Grid> : null}
              </Grid>
          </CardContent>
      </Card>
    </Grid>
  );
};

export default Answer;