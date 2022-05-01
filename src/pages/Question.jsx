import React from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import postsData from '../data/postsData';
import { useParams } from "react-router-dom";
import PostItem from '../component/PostItem';

export default function Question() {

  const post = postsData[0];
  let params = useParams();

  return (

    <Container maxWidth="lg">
      {/* question */}
      <Grid container spacing={4} sx={{ mt: 3 }}>
        <PostItem post={post}>
        </PostItem>
      </Grid>
      {/* answers */}
      <Grid container spacing={4} sx={{ mt: 3}}>
        <Typography>  
          {params.quesId}
        </Typography>
      </Grid>
    </Container>
  );
};