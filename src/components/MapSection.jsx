import React, { useState, useEffect } from 'react';

const MapSection = ({ searchFilters, onSearch, updateSearchFilters }) => {
  const [job, setJob] = useState('');
  const [city, setCity] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showJobSuggestions, setShowJobSuggestions] = useState(false);
  const [showCitySuggestions, setShowCitySuggestions] = useState(false);

  // Job suggestions based on HVAC services
  const jobSuggestions = [
    'HVAC Technician',
    'Heating Repair',
    'Air Conditioning Repair',
    'Furnace Installation',
    'Duct Cleaning',
    'Heat Pump Service',
    'Thermostat Installation',
    'Boiler Repair',
    'Ventilation System',
    'Emergency HVAC Service'
  ];

  // City suggestions
  const citySuggestions = [
    'Toronto, ON',
    'Vancouver, BC',
    'Montreal, QC',
    'Calgary, AB',
    'Edmonton, AB',
    'Ottawa, ON',
    'Mississauga, ON',
    'Winnipeg, MB',
    'Quebec City, QC',
    'Hamilton, ON'
  ];

  // Update local state when global filters change
  useEffect(() => {
    setJob(searchFilters.job || '');
    setCity(searchFilters.city || '');
  }, [searchFilters]);

  const handleSearch = () => {
    if (job.trim() || city.trim()) {
      onSearch(job.trim(), city.trim() || 'Toronto');
      setShowJobSuggestions(false);
      setShowCitySuggestions(false);
    }
  };

  const handleJobInputChange = (e) => {
    const value = e.target.value;
    setJob(value);
    
    if (value.length > 0) {
      const filtered = jobSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowJobSuggestions(true);
    } else {
      setShowJobSuggestions(false);
    }
  };

  const handleCityInputChange = (e) => {
    const value = e.target.value;
    setCity(value);
    
    if (value.length > 0) {
      const filtered = citySuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowCitySuggestions(true);
    } else {
      setShowCitySuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion, type) => {
    if (type === 'job') {
      setJob(suggestion);
      setShowJobSuggestions(false);
    } else {
      setCity(suggestion);
      setShowCitySuggestions(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Generate map URL based on city
  const getMapUrl = () => {
    const location = city || searchFilters.city || 'Toronto, ON';
    const query = `${job || 'HVAC Technicians'} near ${location}`;
    const encodedQuery = encodeURIComponent(query);
    
    return `https://www.google.com/maps/embed/v1/search?key=&q=${encodedQuery}`;
  };

  return (
    <section className="pb-4 sm:pb-6 relative ">
      <div className="mx-auto">
        {/* Search Bar - Mobile Responsive */}
        <div className="bg-[#213A59] p-3 sm:p-4 rounded-lg border">
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <div className="relative flex-1 sm:flex-none">
              <input
                type="text"
                placeholder="What is your job?"
                value={job}
                onChange={handleJobInputChange}
                onKeyPress={handleKeyPress}
                onFocus={() => job.length > 0 && setShowJobSuggestions(true)}
                className="w-full sm:w-[400px] lg:w-[439px] px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              {/* Job Suggestions Dropdown */}
              {showJobSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-48 overflow-y-auto">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion, 'job')}
                      className="w-full px-3 sm:px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors text-gray-700"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="relative flex-1 sm:flex-none">
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={handleCityInputChange}
                onKeyPress={handleKeyPress}
                onFocus={() => city.length > 0 && setShowCitySuggestions(true)}
                className="w-full sm:w-[400px] lg:w-[444px] px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              {/* City Suggestions Dropdown */}
              {showCitySuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-48 overflow-y-auto">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion, 'city')}
                      className="w-full px-3 sm:px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors text-gray-700"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button
              onClick={handleSearch}
              disabled={!job.trim() && !city.trim()}
              className="w-full sm:w-36 px-4 sm:px-6 py-2 bg-red-600 text-white text-sm sm:text-base rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Search
            </button>
          </div>
          
          {/* Quick search buttons - Mobile responsive */}
          {/* <div className="flex gap-2 mt-3 flex-wrap">
            <span className="text-white text-xs sm:text-sm">Popular:</span>
            {['Heating Repair', 'AC Installation', 'Emergency Service', 'Duct Cleaning'].map((quickSearch) => (
              <button
                key={quickSearch}
                onClick={() => {
                  setJob(quickSearch);
                  onSearch(quickSearch, city || searchFilters.city || 'Toronto');
                }}
                className="text-xs bg-white/20 text-white px-2 sm:px-3 py-1 rounded-full hover:bg-white/30 transition-colors"
              >
                {quickSearch}
              </button>
            ))}
          </div> */}
        </div>

        {/* Map Container - Mobile responsive */}
        <div className="rounded-lg overflow-hidden border border-gray-300 shadow mt-4" style={{ height: '250px' }}>
          <iframe
            title={`${job || 'HVAC Technicians'} in ${city || searchFilters.city || 'Toronto'}`}
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0, minHeight: '250px' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.510356473105!2d-79.4000496845012!3d43.66166797912109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d6b6b6b6b6%3A0x6b6b6b6b6b6b6b6b!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1681234567890!5m2!1sen!2sca"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        
        {/* Search Results Summary - Mobile responsive */}
        {(searchFilters.job || searchFilters.city) && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-xs sm:text-sm text-gray-700">
              Searching for: <span className="font-medium">{searchFilters.job || 'HVAC Services'}</span> 
              {' '}in <span className="font-medium">{searchFilters.city || 'Toronto'}</span>
            </p>
          </div>
        )}
      </div>

      {/* Overlay to close suggestions when clicking outside */}
      {(showJobSuggestions || showCitySuggestions) && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowJobSuggestions(false);
            setShowCitySuggestions(false);
          }}
        />
      )}
    </section>
  );
};

export default MapSection; 