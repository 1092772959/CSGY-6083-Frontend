import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Question from './pages/Question';
import PostQuestion from './pages/PostQuestion';
import Explore from './pages/Explore';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Dashboard />}></Route>
        <Route exact path='/signup' element={<SignUp />}></Route>
        <Route exact path='/signin' element={<SignIn />}></Route>
        <Route exact path='/explore' element={<Explore />}></Route>
        <Route exact path='/questions/:quesId' element={<Question />}></Route>
        <Route exact path='/questions/post' element={<PostQuestion />}></Route>
      </Routes>
    </div>
  );
};

export default Router;