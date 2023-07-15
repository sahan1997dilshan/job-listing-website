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
        const response = await axios.get('https://ceylonscrown.com/trep/GetCountryList');
        console.log(response.data);
        console.log("sahan");
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);


  

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
              <JobsTableLayout jobs={jobs} />
            ) : (
              <CardDetails jobs={jobs} />
            )}
          </Grid>


        </Grid>

      </Layout>

    </div>
  );

}

export default ListingPage;