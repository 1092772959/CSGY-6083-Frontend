import React, {Fragment} from 'react';

import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import htmlSubstring from '../utils/htmlSubstring';
import injectEllipsis from '../utils/injectEllipsis';

import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

import './PostItem.scss';


const PostItem = ({
  post: {
    quesId,
    uid,
    username,
    topic_id,
    date,
    title,
    quesBody,
    answerCount,
    tags,
  },
}) => {

  return (
    <Grid item xs={12} >
      <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: 1 }}>
            <CardActionArea>
              <Grid container alignItems='center'>
                <Grid item xs={11}>
                  <Typography variant="subtitle1" gutterBottom component="div">
                    <Link to={`/questions/${quesId}`}>{title}</Link>
                  </Typography>
                </Grid>
              </Grid>
              </CardActionArea>
      
              {/* <br/> */}
              <Grid container >
                <Typography variant="subtitle1" color="text.secondary">
                  {date.toLocaleString()} 
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
              
              <Typography variant="subtitle1" paragraph>
                {quesBody.substring(0, 200)}
              </Typography>
                <Grid item justifyContent="flex-end">
                  <Stack direction="row" spacing={1}>
                  {tags.map((tag, index) => (
                    <Chip label={tag} />
                  ))}
                  </Stack>
                </Grid>
              {/* <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography> */}
            </CardContent>
            <CardContent>
              <Typography>
                {answerCount}
              </Typography>
              <Typography>
                answers
              </Typography>
              {/* <div className='vote'>
                <span className='vote-count'>{answerCount}</span>
                <div className='count-text'>answers</div>
              </div> */}
            </CardContent>
          </Card>
    </Grid>
  );
};

export default PostItem;