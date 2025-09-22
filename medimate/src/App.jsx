// App.jsx
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import UploadComponent from './UploadComponent';
import SearchResultsComponent from './SearchResultsComponent';
import Header from './Header'; // Import the Header component
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContent from './MainContent'; // Import the MainContent component
import NonCommunicableDiseases from './NonCommunicableDiseases.jsx';
import Footer from './Footer';


function App() {
  const [medicineInfo, setMedicineInfo] = useState(null);

  const handleUploadSuccess = async (data) => {
    try {
      const response = await axios.post('/upload', data);
      setMedicineInfo(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="App">
      <Header /> {/* Include the Header component */}
      <MainContent /> {/* Include the MainContent component */}
      <NonCommunicableDiseases /> {/* Include the NonCommunicableDiseases component */}
      <h1>Medicine Search</h1>
      <UploadComponent onUploadSuccess={handleUploadSuccess} />
      {medicineInfo && <SearchResultsComponent medicineInfo={medicineInfo} />}
      <Footer />
    </div>
  );
}

export default App;
