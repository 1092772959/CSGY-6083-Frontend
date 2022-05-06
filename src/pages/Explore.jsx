import React, {useState, useEffect} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

import postsData from '../data/postsData';
import PostItem from '../component/PostItem';
import PrimarySearchAppBar from '../component/Header';
import Typography from '@mui/material/Typography';
import TopicSelector from '../component/TopicSelector';
import SideList from '../component/SideList';
import {FormControl, InputLabel} from '@mui/material';

import axios from 'axios';
import {BASE_URL} from '../config/server';

const theme = createTheme();

const HomePage = () => {

  const[state, setState]=useState({
    questions: [],
    showedQuestions: [],
  });

  useEffect(()=> {
    const uid = localStorage.getItem('uid');
    axios.get(BASE_URL + "/questions/explore")
      .then(res => {
        console.log(res.data.data);
        setState({
          questions: res.data.data,
          showedQuestions: res.data.data,
        });
      })
      .catch(error => {
        alert("Network error!");
      });
  }, []);
  
  const handleChange = (event, parentTopicId, TopicId) => {
    event.preventDefault();
    let keyword = event.currentTarget.value;
    if(keyword !== ''){
      axios.get(BASE_URL + '/questions/search/' + keyword)
      .then(res => {
        let data = res.data;
        if(data.code == 0){
          console.log(data);
          setState({
            questions: data.data,
            showedQuestions: data.data
          });
        }
      })
      .catch(error => {
        alert('No keyword Match');
      });
    }

    if (parentTopicId === -1) {
      setState({
        questions: state.questions,
        showedQuestions : state.questions,
      });
    } else if (TopicId === -1) {
      var tmpQuestions = [];
      state.questions.forEach((question, i) => {
        if (question.p_topic_id == parentTopicId) {
          tmpQuestions.push(question);
        }
      });
      setState({
        questions: state.questions,
        showedQuestions: tmpQuestions,
      });
    } else {
      var tmpQuestions = [];
      state.questions.forEach((question, i) => {
        if (question.topic_id === TopicId) {
          tmpQuestions.push(question);
        }
      });
      setState({
        questions: state.questions,
        showedQuestions: tmpQuestions,
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <Grid container>
        <main>
          <br/>
          <Grid container>
            <Grid item xs={2}>
              <SideList></SideList>
            </Grid>
            <Grid item xs={10}>
              <Grid container spacing = {3}>
                <Grid item xs = {2}>  
                  <Typography variant="h4" gutterBottom component="div">
                    Questions
                  </Typography>  
                </Grid>
                <Grid item xs = {3}>
                  <TopicSelector setQuestions={handleChange}></TopicSelector>
                </Grid>
                <Grid item xs = {4}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <TextField
                         required
                         id="keyword"
                         label="Search by Keyword"
                         name="keyword"
                         autoComplete="keyword"
                         autoFocus
                         onChange={handleChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs = {2}>
                  <div style={{ display: "flex" }}>
                    <Button component={Link} to="/questions/post"
                      variant="contained" 
                      color="primary"
                      size="large"
                      style={{ margin: "auto" }}>
                      Ask a Question
                    </Button>
                  </div>
                </Grid>
              </Grid>
              
              <Grid container spacing={3} >
                {state.showedQuestions.map((post) => {
                  return (
                    <PostItem post={post}></PostItem>
                  )
                })}  
              </Grid>
            </Grid>
          </Grid>
          </main>
      </Grid>
      
    </ThemeProvider>
  );
};

export default HomePage;
