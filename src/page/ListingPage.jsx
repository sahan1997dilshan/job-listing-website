import React, { Component, useEffect, useState } from 'react';
import CardDetails from '../component/CardDetails';
import axios from 'axios';
import JobsTableLayout from '../component/JobsTableLayout';
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

  function createData(title, location, salary) {
    return { title, location, salary};
  }

  const rows = [
    createData('Frozen yoghurt', 'Walasmulle', 100000.0),
    createData('Ice cream sandwich','Colombo', 90000.0),
    createData('Eclair','Colombo-07', 160000.0),
    createData('Cupcake','Colombo-06', 37000),
    createData('Gingerbread','Kaluthare', 16000),
    createData('Eclair','Colombo-07', 160000.0),
    createData('Cupcake','Colombo-06', 37000),
    createData('Gingerbread','Kaluthare', 16000),
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


  useEffect(() => {
    // Fetch jobs list from the API endpoint
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

  useEffect(() => {
    // Apply filters to the jobs list
    const filteredJobs = jobs.filter((job) => {
      const { location, salary } = filters;
      // Check if the job matches the selected filters
      if (
        (location === '' || job.location === location) &&
        (salary === '' || job.salary === salary)
      ) {
        return true;
      }
      return false;
    });

    setFilteredJobs(filteredJobs);
  }, [jobs, filters]);
  

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
            <JobFilter filters={filters} onFilterChange={handleFilterChange} >Filter</JobFilter>
          </Grid>

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