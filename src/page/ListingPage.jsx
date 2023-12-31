import React, { Component, useEffect, useState } from 'react';
import CardDetails from '../component/CardDetails';
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


  function createData(name, title, location, salary) {
    return { name, title, location, salary };
  }
// this part is hard code.because some API doesn't work
  const rows = [
    createData('Sahan Dilshan', 'DevOps', 'Walasmulle', '$1000'),
    createData('Navod Shehan', 'Developer', 'Colombo', '$900'),
    createData('Bhashitha', 'Engineer', 'Colombo-07', '$1600'),
    createData('Thilina ', 'CEO', 'Colombo-06', '$1600'),
    createData('Dilukshan', 'Engineer', 'Kaluthare', '$16000'),
    createData('Dhanuka Iroshan', 'DevOps', 'Colombo-07', '$16000'),
    createData('Dulanjana', 'DevOps', 'Colombo-06', '$37000'),
    createData('Lasith', 'Developer', 'Kaluthare', '$37000'),
  ];
//tavle component handle this function
  const handleTableClick = () => {
    setSelectedLayout('table');
  };


//card component handle this function
  const handleCardClick = () => {
    setSelectedLayout('card');
  };


//filter component handle this function
  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
//search component handle this function
  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };
//API get request
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
    

  }, []);
//search part....
  useEffect(() => {
    const filtered = searchQuery
      ? jobs.filter((job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      : jobs;
    setFilteredJobs(filtered);
    console.log(filtered);
  }, [searchQuery, jobs]);



  return (
    <div>
      <Layout>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}>

          <Grid sm={12} lg={10}>
            {/* button group coponent */}
            <ButtonGroup
              disableElevation
              variant="outlined"
              aria-label="outlined button group"
              color="secondary"
            >
              <Button
                sx={{
                  '&:hover': {
                    backgroundColor: 'purple',
                  },
                }}
                onClick={handleTableClick}>Table Layout
              </Button>

              <Button
                sx={{
                  '&:hover': {
                    backgroundColor: 'purple',
                  },
                }}
                onClick={handleCardClick}>Card Layout
              </Button>
            </ButtonGroup>
          </Grid>


          {/* search component */}
          <Grid sm={12} lg={2}>
            <JobSearch searchQuery={searchQuery} onSearchChange={handleSearchChange} />
          </Grid>


          {/* card component and table component */}
          <Grid sm={12} lg={12}>
            {selectedLayout === 'table' ? (
              <JobsTableLayout jobs={filteredJobs} />
            ) : (
              <CardDetails jobs={filteredJobs} />
            )}
          </Grid>



        </Grid>

      </Layout>

    </div>
  );

}

export default ListingPage;