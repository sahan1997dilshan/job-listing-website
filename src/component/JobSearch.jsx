import TextField from '@mui/material/TextField';

const JobSearch = ({ searchQuery, onSearchChange }) => {
  const handleSearchChange = (event) => {
    const value = event.target.value;
    onSearchChange(value);
  };

  return (
    <TextField
      label="Search Jobs"
      value={searchQuery}
      onChange={handleSearchChange}
    />
  );
};

export default JobSearch;