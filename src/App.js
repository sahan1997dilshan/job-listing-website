import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import ListingPage from './page/ListingPage';
import Login from './page/Login';
import Register from './page/Register';
import JobPostForm from './page/JobPostForm';
import JobsTableLayout from './component/JobsTableLayout';
import Layout from './layout/Layout';
import CardDetails from './component/CardDetails';


function App() {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route exact path="/"          element={<Register/>}/>
          <Route path='/login'           element={<Login/>} />
          <Route path='/register'        element={<Register/>} />
          <Route path='/listingpage'     element={<ListingPage/>}/>
          <Route path='/jobpostform'     element={<JobPostForm/>}/>
          <Route path='/carddetails'     element={<CardDetails/>}/>
          <Route path='/jobstablelayout' element={<JobsTableLayout/>}/>
          <Route path='/layout'          element={<Layout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
