import React, {Fragment} from 'react';

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
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
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
    likes
  },
}) => {

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
                  <Stack direction="row" spacing={2}>
                    {/* <Fab size="small"> */}
                      <ThumbUpOffAltIcon></ThumbUpOffAltIcon>
                    {/* </Fab> */}
                    <Typography >{likes}</Typography>
                  </Stack>
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