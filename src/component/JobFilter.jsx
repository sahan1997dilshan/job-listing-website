import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const JobFilter = ({ filterValue, onFilterChange }) => {
  
  const handleFilterChange = (event) => {
    const value = event.target.value;
    onFilterChange(value);
  };

  return (
    <FormControl sx={{ minWidth: 180 }}>
      <InputLabel id="job-filter-label" sx={{ color: 'black' }}>
        Filter
      </InputLabel>
      <Select
        labelId="job-filter-label"
        value={filterValue}
        onChange={handleFilterChange}
        sx={{
          color: 'black',
          '&:before': {
            borderColor: 'red',
          },
          '&:hover:before': {
            borderColor: 'blue',
          },
        }}
        inputProps={{
          style: { color: 'black' },
        }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="location">Location</MenuItem>
        <MenuItem value="salary">Salary</MenuItem>
        {/* Add more filter options */}
      </Select>
    </FormControl>
  );
};

export default JobFilter;
