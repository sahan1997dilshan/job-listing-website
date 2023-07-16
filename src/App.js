import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import ListingPage from './page/ListingPage';
import Login from './page/Login';
import Register from './page/Register';
import JobPostForm from './page/JobPostForm';
import CardDetails from './component/CardDetails';
import JobsTableLayout from './component/JobsTableLayout';
import Layout from './layout/Layout';
import CardDetails2 from './component/CardDetails2';


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
          <Route path='/carddetails2'    element={<CardDetails2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
