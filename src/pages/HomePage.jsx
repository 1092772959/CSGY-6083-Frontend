import React, {useState, useEffect} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import postsData from '../data/postsData';
import PostItem from '../component/PostItem';
import PrimarySearchAppBar from '../component/Header';

const theme = createTheme();

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={4} sx={{ mt: 3 }}>
            {postsData.map((post) => {
              return (
                <PostItem post={post}></PostItem>
              )
            })}  
          </Grid>
        </main>
      </Container>
      
    </ThemeProvider>
  );
};

export default HomePage;
