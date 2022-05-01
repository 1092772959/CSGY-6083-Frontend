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
    topicId,
    date,
    title,
    quesBody,
    answerCount,
    tags,
  },
}) => {
  // const answerVoteUp = (
  //   <div className='vote answer'>
  //     <span className='vote-count fc-green-500'>{answer_count}</span>
  //     <div className='count-text'>answers</div>
  //   </div>
  // );

  // const answerVoteDown = (
  //   <div className='vote'>
  //     <span className='vote-count'>{answer_count}</span>
  //     <div className='count-text'>answers</div>
  //   </div>
  // );

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
                {/* <Grid item xs={1}>
                  <Typography variant="subtitle2" gutterBottom component="div">
                    {username}  
                  </Typography>
                </Grid> */}
              </Grid>
              </CardActionArea>
      
              {/* <br/> */}
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
              {/* <Typography component="h2" variant="h5">
                {title}
              </Typography> */}
              
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
    // <div className='posts'>
      
    //   <div className='stats-container fc-black-500'>
    //     <div className='stats'>
    //       {/* <div className='vote'>
    //         <span className='vote-count'>{comment_count}</span>
    //         <div className='count-text'>comments</div>
    //       </div>
    //       {answer_count > 0 ? answerVoteUp : answerVoteDown} */}
    //       <div className='vote'>
    //         <span className='vote-count'>{answerCount}</span>
    //         <div className='count-text'>answers</div>
    //       </div>
    //       {/* <div className='vote'>
    //         <span className='vote-count'>{tags.length}</span>
    //         <div className='count-text'>tags</div>
    //       </div> */}
    //       {/* <div className='vote'>
    //         <div className='count-text'>{views} views</div>
    //       </div> */}
    //     </div>
    //   </div>
    //   <div className='summary'>
    //     <Grid container alignItems='center'>
    //       <Grid item xs={1}>
    //         <Typography variant="subtitle2" gutterBottom component="div">
    //           {username}  
    //         </Typography>
    //       </Grid>
    //       <Grid item xs={11}>
    //         <Typography>
    //           <Link to={`/questions/${quesId}`}>{title}</Link>
    //         </Typography>
    //       </Grid>
    //     </Grid>
        
    //     <div className='brief' dangerouslySetInnerHTML={{__html: injectEllipsis(htmlSubstring(quesBody, 200))}}></div>
        
    //     <Grid container spacing={2}>
    //       <Grid item xs={10}>
    //         <Stack direction="row" spacing={1}>
    //         {tags.map((tag, index) => (
    //           <Chip label={tag} />
    //           // <TagBadge key={index} tag_name={tag.tagname} size={'s-tag'} float={'left'} />
    //         ))}
    //         </Stack>
    //       </Grid>
          
    //       <Grid item xs={2}>
    //           <p>{date}</p>
    //       </Grid>
    //     </Grid>

    //     {/* <UserCard
    //       created_at={date}
    //       user_id={uid}
    //       username={username}
    //       float={'right'}
    //       backgroundColor={'transparent'}
    //     /> */}
    //   </div>
    // </div>
  );
};

export default PostItem;