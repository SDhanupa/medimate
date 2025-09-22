// UploadComponent.jsx
import React, { useCallback } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { Box, Typography } from '@mui/material';

const UploadComponent = () => {
  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Prediction:', response.data.medicineInfo);
      // Handle response as needed
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: '2px dashed #cccccc',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: '#f9f9f9'
      }}
    >
      <input {...getInputProps()} />
      <Typography variant="h6" sx={{ marginBottom: '10px', color: '#555555' }}>
        Drag 'n' drop an image here, or click to select an image
      </Typography>
    </Box>
  );
};

export default UploadComponent;
