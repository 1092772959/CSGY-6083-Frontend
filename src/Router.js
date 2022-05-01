import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Question from './pages/Question';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route exact path='/signup' element={<SignUp />}></Route>
        <Route exact path='/signin' element={<SignIn />}></Route>
        <Route exact path='/questions/:quesId' element={<Question />}></Route>
      </Routes>
    </div>
  );
};

export default Router;