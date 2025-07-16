import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import MapSection from './components/MapSection.jsx';
import TechniciansList from './components/TechniciansList.jsx';
import Footer from './components/Footer.jsx';

function App() {
  // Global search state
  const [searchFilters, setSearchFilters] = useState({
    job: '',
    city: 'Toronto',
    sortBy: '',
    category: '',
    starExpertsOnly: false,
    bureauVerifiedOnly: false,
    minRating: ''
  });

  // Menu state for header
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Location state
  const [userLocation, setUserLocation] = useState('Toronto, ON');

  // Function to update search filters
  const updateSearchFilters = (newFilters) => {
    setSearchFilters(prev => ({ ...prev, ...newFilters }));
  };

  // Function to handle search from MapSection
  const handleSearch = (job, city) => {
    updateSearchFilters({ job, city });
  };

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        userLocation={userLocation}
        setUserLocation={setUserLocation}
      />
      <MapSection 
        searchFilters={searchFilters}
        onSearch={handleSearch}
        updateSearchFilters={updateSearchFilters}
      />
      <TechniciansList 
        searchFilters={searchFilters}
        updateSearchFilters={updateSearchFilters}
      />
      <Footer />
    </div>
  );
}

export default App; 