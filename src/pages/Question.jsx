import React, {useEffect, useState} from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {Button, TextField, alertTitleClasses} from '@mui/material';


import postsData from '../data/postsData';
import { useParams } from "react-router-dom";
import Divider from '@mui/material/Divider';

import PostItem from '../component/PostItem';
import Answer from '../component/Answer';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import {default as mockAnswers }from '../data/answers';

import PrimarySearchAppBar from '../component/Header';
import axios from 'axios';
import { BASE_URL } from '../config/server';
const theme = createTheme();

export default function Question() {

  const [post, setPost] = useState(postsData[0]);
  const [answers, setAnswers] = useState(mockAnswers);

  const params = useParams();

  const uid = localStorage.getItem('uid');

  // get question
  useEffect( () => {
    let ques_id = params.quesId
    console.log(ques_id);
    axios.get(BASE_URL + '/questions/' + ques_id)
      .then(res => {
        setPost(res.data.data);
      })
      .catch(error => {
        alert(error);
      });
  }, []);

  // get answers
  useEffect( () => {
    let ques_id = params.quesId;
    axios.get(BASE_URL + '/answers/question?ques_id=' + ques_id + '&uid=' + uid)
      .then(res => {
        setAnswers(res.data.data);
      })
      .catch(error => {
        alert(error);
      });
  }, []);


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
      <Grid container spacing={5} sx={{ mt: 1}}>
        {answers.map((ans) => {
          return (
            <Answer answer={ans}> </Answer>
          )
        })}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom component="div">
              Post your Answer
          </Typography>
          <TextField
              id="outlined-multiline-static"
              fullWidth
              label="Option"
              multiline
              rows={20}
              defaultValue="Default Value"
              variant="outlined"
            />
            <br/>
            <br/>
            <div style={{ display: "flex" }}>
                <Button 
                  variant="contained" 
                  color="primary"
                  size="large"
                  style={{ marginLeft: "auto" }}>
                  Post
                </Button>
            </div>
         </Grid>
        </Grid>
      </main>
    </Container>
      
  </ThemeProvider>
  );
};