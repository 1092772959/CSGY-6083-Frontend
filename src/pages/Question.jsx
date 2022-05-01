import React from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import postsData from '../data/postsData';
import { useParams } from "react-router-dom";
import Divider from '@mui/material/Divider';

import PostItem from '../component/PostItem';
import Answer from '../component/Answer';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import answers from '../data/answers';

import PrimarySearchAppBar from '../component/Header';
const theme = createTheme();

export default function Question() {

  const post = postsData[0];
  let params = useParams();

  return (
  <ThemeProvider theme={theme}>
    <PrimarySearchAppBar></PrimarySearchAppBar>
    <Container maxWidth="lg">
      <main>
{/* question */}
      <Grid container>
        <Grid item xs={3}>
          <Typography variant="h4" gutterBottom component="div">
            Question
          </Typography>
          <Grid item>
            
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid container spacing={2} > */}
        <Paper elevation={5} >
          <PostItem post={post} />
        </Paper>
      {/* </Grid> */}
      {/* answers */}
      <br/>
      <Grid>
        <Typography variant="h5" gutterBottom component="div">
          Answers
        </Typography>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 1}}>
        {answers.map((ans) => {
          return (
            <Answer answer={ans}> </Answer>
          )
        })}
      </Grid>
      </main>
      
    </Container>
  </ThemeProvider>
  );
};