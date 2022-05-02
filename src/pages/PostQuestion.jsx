import React from 'react';

import { Container, Grid, Typography, TextField, Button} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PrimarySearchAppBar from '../component/Header';

const theme = createTheme();

export default function Question() {

  return (
  <ThemeProvider theme={theme}>
    <PrimarySearchAppBar></PrimarySearchAppBar>
    <Container maxWidth="lg">
      <main>
{/* Ask a question */}
      <br/>
      <Grid container>
        <Grid item xs={3}>
          <Typography variant="h4" gutterBottom component="div">
            Ask a Question
          </Typography>
        </Grid>
      </Grid>
      <br/>
      <Container>
      <Grid>
        <Typography variant="h5" gutterBottom component="div">
          Title
        </Typography>
        <form className="title-input" noValidate autoComplete="off">
            <TextField 
              id="standard-full-width"  
              fullWidth
              label="Required" 
              defaultValue="Title" 
              inputProps={{ 
                  'aria-label': 'description'
              }}
            />
        </form>
      </Grid>
      <br/>
      <br/>
      <Typography variant="h5" gutterBottom component="div">
          Body
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
        </Container>
      </main>
      
    </Container>
  </ThemeProvider>
  );
};