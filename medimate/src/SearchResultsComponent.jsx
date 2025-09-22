// SearchResultsComponent.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const SearchResultsComponent = ({ medicineInfo }) => {
  return (
    <Box sx={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <Typography variant="h4" sx={{ marginBottom: '10px' }}>Medicine Information</Typography>
      <Typography variant="body1" sx={{ marginBottom: '5px' }}>Name: {medicineInfo.name}</Typography>
      <Typography variant="body1" sx={{ marginBottom: '5px' }}>Description: {medicineInfo.description}</Typography>
      <Typography variant="body1" sx={{ marginBottom: '5px' }}>Usage: {medicineInfo.usage}</Typography>
      <Typography variant="body1" sx={{ marginBottom: '5px' }}>Dosage: {medicineInfo.dosage}</Typography>
      <Typography variant="body1" sx={{ marginBottom: '5px' }}>Side Effects: {medicineInfo.side_effects.join(', ')}</Typography>
    </Box>
  );
};

export default SearchResultsComponent;
