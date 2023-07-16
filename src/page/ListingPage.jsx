import React, { Component, useEffect, useState } from 'react';
import CardDetails from '../component/CardDetails';
import CardDetails2 from '../component/CardDetails2';
import axios from 'axios';
import JobsTableLayout from '../component/JobsTableLayout';
import JobSearch from '../component/JobSearch';
import JobFilter from '../component/JobFilter';
import Layout from '../layout/Layout';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';


const ListingPage = () => {

  const [jobs, setJobs] = useState([]);
  const [selectedLayout, setSelectedLayout] = useState('table');
  const [filters, setFilters] = useState({
    location: '',
    salary: '',
  });
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  

  function createData(name,title, location, salary) {
    return { name,title, location, salary};
  }

  const rows = [
    createData('Sahan Dilshan','DevOps', 'Walasmulle', 100000.0),
    createData('Navod Shehan','Developer','Colombo', 90000.0),
    createData('Bhashitha Ranasinghe','Engineer','Colombo-07', 160000.0),
    createData('Thilina Madushanka','CEO','Colombo-06', 37000),
    createData('Dilukshan Bimsara','Manager','Kaluthare', 16000),
    createData('Dhanuka Iroshan','Student','Colombo-07', 160000.0),
    createData('Dulanjana Weerasinghe','DevOps','Colombo-06', 37000),
    createData('Lasith Malinga','Cricketer','Kaluthare', 16000),
  ];

  const handleTableClick = () => {
    setSelectedLayout('table');
  };



  const handleCardClick = () => {
    setSelectedLayout('card');
  };



  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  useEffect(() => {
    
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://ceylonscrown.com/trep/JobsList');
        console.log(response.data);
        //  setJobs(response.data);
        setJobs(rows);

      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();

    const filtered = searchQuery
    ? jobs.filter((job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : jobs;
    setFilteredJobs(filtered);
  }, [searchQuery, jobs]);

  
  

  return (
    <div>
      <Layout>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}>

          <Grid sm={12} lg={10}>
            <ButtonGroup
              disableElevation
              variant="contained"
              aria-label="Disabled elevation buttons"
            >
              <Button onClick={handleTableClick}>Table Layout</Button>
              <Button onClick={handleCardClick}>Card Layout</Button>
            </ButtonGroup>
          </Grid>

          <Grid sm={12} lg={2}>
            <JobSearch searchQuery={searchQuery} onSearchChange={handleSearchChange}/>
          </Grid>

          <Grid sm={12} lg={12}>
            {selectedLayout === 'table' ? (
              <JobsTableLayout jobs={filteredJobs} />
            ) : (
              <CardDetails2 jobs={filteredJobs} />
            )}
          </Grid>


        </Grid>

      </Layout>

    </div>
  );

}

export default ListingPage;