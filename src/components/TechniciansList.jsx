import React, { useState, useEffect, useMemo } from 'react';
import image from '../public/image.png'
import Agesolutions from '../public/Agesolutions.png'
import HSBverification from '../public/HSBverification.png'
import LogoIcon from '../public/LogoIcon1.png'

const TechniciansList = ({ searchFilters, updateSearchFilters }) => {
  const [displayedTechnicians, setDisplayedTechnicians] = useState(8);
  const [selectedQuotes, setSelectedQuotes] = useState(new Set());
  const [showAllFilters, setShowAllFilters] = useState(false);

  // Extended technician data with more variety
  const allTechnicians = [
    {
      id: 1,
      name: "All Comfort Energy Solutions",
      rating: 4.8,
      reviews: 127,
      services: ["Heating", "Cooling", "Ventilation"],
      verified: true,
      emergency: true,
      distance: 2.3,
      category: "Heating",
      address: "9400 ON-27, Vaughan, ON L4H 0J2",
      phone: "(416) 555-0101"
    },
    {
      id: 2,
      name: "Toronto HVAC Experts",
      rating: 4.9,
      reviews: 89,
      services: ["AC Repair", "Furnace Service", "Duct Cleaning"],
      verified: true,
      emergency: false,
      distance: 1.8,
      category: "Cooling",
      address: "123 King St, Toronto, ON M5H 1A1",
      phone: "(416) 555-0102"
    },
    {
      id: 3,
      name: "Climate Control Masters",
      rating: 4.7,
      reviews: 156,
      services: ["Installation", "Maintenance", "Emergency Repair"],
      verified: true,
      emergency: true,
      distance: 3.1,
      category: "Installation",
      address: "456 Queen St, Toronto, ON M4C 1N4",
      phone: "(416) 555-0103"
    },
    {
      id: 4,
      name: "Premier Heating & Cooling",
      rating: 4.6,
      reviews: 203,
      services: ["Heat Pump", "Air Conditioning", "Boiler Service"],
      verified: true,
      emergency: false,
      distance: 4.2,
      category: "Heating",
      address: "789 Bloor St, Toronto, ON M6G 1K5",
      phone: "(416) 555-0104"
    },
    {
      id: 5,
      name: "Reliable HVAC Services",
      rating: 4.8,
      reviews: 94,
      services: ["Residential", "Commercial", "Industrial"],
      verified: true,
      emergency: true,
      distance: 1.5,
      category: "Repair",
      address: "321 Dundas St, Toronto, ON M5B 1B8",
      phone: "(416) 555-0105"
    },
    {
      id: 6,
      name: "Toronto Comfort Solutions",
      rating: 4.5,
      reviews: 178,
      services: ["Smart Thermostats", "Energy Efficiency", "Maintenance"],
      verified: true,
      emergency: false,
      distance: 5.1,
      category: "Maintenance",
      address: "654 College St, Toronto, ON M6G 1B5",
      phone: "(416) 555-0106"
    },
    {
      id: 7,
      name: "Elite HVAC Technicians",
      rating: 4.9,
      reviews: 112,
      services: ["Emergency Service", "Installation", "Repair"],
      verified: true,
      emergency: true,
      distance: 2.8,
      category: "Emergency",
      address: "987 Spadina Ave, Toronto, ON M5S 2J5",
      phone: "(416) 555-0107"
    },
    {
      id: 8,
      name: "GTA Heating & Air",
      rating: 4.7,
      reviews: 145,
      services: ["Furnace Repair", "AC Installation", "Duct Work"],
      verified: true,
      emergency: false,
      distance: 3.7,
      category: "Installation",
      address: "159 Bay St, Toronto, ON M5J 2R8",
      phone: "(416) 555-0108"
    },
    {
      id: 9,
      name: "Fast Fix HVAC",
      rating: 4.4,
      reviews: 67,
      services: ["Emergency Repair", "24/7 Service", "Quick Response"],
      verified: false,
      emergency: true,
      distance: 1.2,
      category: "Emergency",
      address: "753 Yonge St, Toronto, ON M4Y 2B7",
      phone: "(416) 555-0109"
    },
    {
      id: 10,
      name: "Green Energy HVAC",
      rating: 4.6,
      reviews: 198,
      services: ["Eco-Friendly", "Heat Pumps", "Solar Integration"],
      verified: true,
      emergency: false,
      distance: 6.2,
      category: "Installation",
      address: "852 Richmond St, Toronto, ON M6J 1C5",
      phone: "(416) 555-0110"
    }
  ];

  // Filter and sort technicians based on search filters
  const filteredTechnicians = useMemo(() => {
    let filtered = [...allTechnicians];

    // Filter by job search
    if (searchFilters.job) {
      filtered = filtered.filter(tech => 
        tech.services.some(service => 
          service.toLowerCase().includes(searchFilters.job.toLowerCase())
        ) || tech.name.toLowerCase().includes(searchFilters.job.toLowerCase())
      );
    }

    // Filter by category
    if (searchFilters.category && searchFilters.category !== 'Categories') {
      filtered = filtered.filter(tech => 
        tech.category === searchFilters.category ||
        tech.services.some(service => 
          service.toLowerCase().includes(searchFilters.category.toLowerCase())
        )
      );
    }

    // Filter by star experts (verified only)
    if (searchFilters.starExpertsOnly) {
      filtered = filtered.filter(tech => tech.verified);
    }

    // Filter by bureau verified experts
    if (searchFilters.bureauVerifiedOnly) {
      filtered = filtered.filter(tech => tech.verified);
    }

    // Filter by minimum rating
    if (searchFilters.minRating) {
      const minRating = searchFilters.minRating === '4+ Stars' ? 4 : 
                       searchFilters.minRating === '3+ Stars' ? 3 : 0;
      filtered = filtered.filter(tech => tech.rating >= minRating);
    }

    // Sort technicians
    if (searchFilters.sortBy) {
      switch (searchFilters.sortBy) {
        case 'Rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case 'Reviews':
          filtered.sort((a, b) => b.reviews - a.reviews);
          break;
        case 'Distance':
          filtered.sort((a, b) => a.distance - b.distance);
          break;
        default:
          break;
      }
    }

    return filtered;
  }, [searchFilters]);

  // Separate recommended (top-rated) and other technicians
  const recommendedTechnicians = filteredTechnicians.filter(tech => tech.rating >= 4.7).slice(0, Math.min(displayedTechnicians / 2, 4));
  const otherTechnicians = filteredTechnicians.filter(tech => tech.rating < 4.7 || !recommendedTechnicians.includes(tech)).slice(0, displayedTechnicians - recommendedTechnicians.length);

  const handleFilterChange = (filterType, value) => {
    updateSearchFilters({ [filterType]: value });
  };

  const handleQuoteRequest = (technicianId) => {
    const newSelected = new Set(selectedQuotes);
    if (newSelected.has(technicianId)) {
      newSelected.delete(technicianId);
    } else {
      newSelected.add(technicianId);
    }
    setSelectedQuotes(newSelected);
    
    // Here you would typically send the quote request to a backend
    console.log('Quote requested for technician:', technicianId);
  };

  const loadMoreTechnicians = () => {
    setDisplayedTechnicians(prev => Math.min(prev + 4, filteredTechnicians.length));
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex text-yellow-400 text-sm">
        {'★'.repeat(fullStars)}
        {hasHalfStar && '☆'}
        {'☆'.repeat(emptyStars)}
      </div>
    );
  };

  const TechnicianCard = ({ tech, isRecommended = false }) => (
    <div className="border border-black border-opacity-40 rounded-[15px] p-3 sm:p-4 mb-4 bg-white">
      {/* Mobile Layout */}
      <div className="block sm:hidden">
        {/* Company Info and Image Row */}
        <div className="flex gap-3 mb-3">
          {/* Company Logo */}
          <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg">
            <img src={Agesolutions} alt={tech.name} className="w-12 h-12 object-contain" />
          </div>
          
          {/* Company Image */}
          <div className="flex-1 h-16 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src={image} 
              alt={`${tech.name} workspace`}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Verification Badge */}
          {tech.verified && (
            <div className="flex-shrink-0 w-16 h-8 flex items-center justify-center">
              <img src={HSBverification} alt='HSB Verification' className="w-full h-full object-contain" />
            </div>
          )}
        </div>
        
        {/* Company Name and Rating */}
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-tight">
            {tech.name}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            {renderStars(tech.rating)}
            <span className="text-sm font-medium text-gray-900">{tech.rating}</span>
            <span className="text-sm text-gray-600">({tech.reviews} Reviews)</span>
            {tech.emergency && (
              <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">24/7</span>
            )}
          </div>
        </div>
        
        {/* Distance and Address */}
        <div className="text-sm text-gray-600 mb-3">
          <p>{tech.distance}km away • {tech.address}</p>
        </div>
        
        {/* Services */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tech.services.map((service, index) => (
            <span key={index} className="text-xs bg-[#F3F3F3] rounded px-2 py-1 text-gray-600">
              {service}
            </span>
          ))}
        </div>
        
        {/* Action Button */}
        <button 
          onClick={() => handleQuoteRequest(tech.id)}
          className={`w-full h-10 flex items-center justify-center gap-2 font-semibold rounded-md shadow transition-colors duration-200 text-sm ${
            selectedQuotes.has(tech.id) 
              ? 'bg-green-600 text-white hover:bg-green-700' 
              : 'bg-[#AF2638] text-white hover:bg-red-700'
          }`}
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_39_695)">
              <path d="M12.041 0.257324V2.9297H14.7132L12.041 0.257324Z" fill="white"/>
              <path d="M11.6016 3.80859C11.3589 3.80859 11.1621 3.61184 11.1621 3.36914V0H4.86328C4.13634 0 3.54492 0.591416 3.54492 1.31836V6.23112C3.68971 6.218 3.83622 6.21094 3.98438 6.21094C5.48227 6.21094 6.82315 6.89578 7.71053 7.96875H12.4805C12.7232 7.96875 12.9199 8.16551 12.9199 8.4082C12.9199 8.6509 12.7232 8.84766 12.4805 8.84766H8.28949C8.56418 9.38367 8.74131 9.97749 8.79817 10.6055H12.4805C12.7232 10.6055 12.9199 10.8022 12.9199 11.0449C12.9199 11.2876 12.7232 11.4844 12.4805 11.4844H8.79817C8.66675 12.9357 7.89132 14.2039 6.76049 15H13.6523C14.3793 15 14.9707 14.4086 14.9707 13.6816V3.80859H11.6016ZM12.4805 6.21094H6.03516C5.79246 6.21094 5.5957 6.01418 5.5957 5.77148C5.5957 5.52879 5.79246 5.33203 6.03516 5.33203H12.4805C12.7232 5.33203 12.9199 5.52879 12.9199 5.77148C12.9199 6.01418 12.7232 6.21094 12.4805 6.21094Z" fill="white"/>
              <path d="M3.98438 7.08984C1.80354 7.08984 0.0292969 8.86409 0.0292969 11.0449C0.0292969 13.2258 1.80354 15 3.98438 15C6.16521 15 7.93945 13.2258 7.93945 11.0449C7.93945 8.86409 6.16521 7.08984 3.98438 7.08984ZM3.74024 10.6055H4.22854C4.74006 10.6055 5.15625 11.0217 5.15625 11.5332V12.0215C5.15625 12.466 4.84189 12.8384 4.42383 12.9284V13.0957C4.42383 13.3384 4.22707 13.5352 3.98438 13.5352C3.74168 13.5352 3.54492 13.3384 3.54492 13.0957V12.9284C3.12686 12.8384 2.8125 12.466 2.8125 12.0215C2.8125 11.7788 3.00926 11.582 3.25195 11.582C3.49465 11.582 3.69141 11.7788 3.69141 12.0215C3.69141 12.0484 3.71332 12.0703 3.74024 12.0703H4.22854C4.25546 12.0703 4.27737 12.0484 4.27737 12.0215V11.5332C4.27737 11.5063 4.25546 11.4844 4.22854 11.4844H3.74024C3.22869 11.4844 2.8125 11.0682 2.8125 10.5566V10.0684C2.8125 9.62382 3.12686 9.25146 3.54492 9.16148V8.99414C3.54492 8.75145 3.74168 8.55469 3.98438 8.55469C4.22707 8.55469 4.42383 8.75145 4.42383 8.99414V9.16148C4.84189 9.25146 5.15625 9.62382 5.15625 10.0684C5.15625 10.3111 4.95949 10.5078 4.7168 10.5078C4.4741 10.5078 4.27734 10.3111 4.27734 10.0684C4.27734 10.0414 4.25543 10.0195 4.22851 10.0195H3.74021C3.71329 10.0195 3.69138 10.0414 3.69138 10.0684V10.5566C3.69141 10.5836 3.71332 10.6055 3.74024 10.6055Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_39_695">
                <rect width="15" height="15" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          {selectedQuotes.has(tech.id) ? 'Quote Requested' : 'Get a free Quote'}
        </button>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:flex items-start gap-6" style={{ minHeight: '180px' }}>
        {/* Company Logo */}
        <div className="flex-shrink-0 flex items-center justify-center" style={{width: '161px', height: '155px', borderRadius: '10px'}}>
          <img src={Agesolutions} alt={tech.name} />
        </div>
        
        <div className="flex-1">
          {/* Company Name and Rating */}
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {tech.name}
              </h3>
              <div className="flex items-center gap-2 mb-2">
                {renderStars(tech.rating)}
                <span className="text-sm font-medium text-gray-900">{tech.rating}</span>
                <span className="text-sm text-gray-600">({tech.reviews} Reviews)</span>
                {tech.emergency && (
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">24/7</span>
                )}
              </div>
            </div>
            
            {/* Verification Badge */}
            {tech.verified && (
              <div className="w-24 h-8" style={{ width: '99.3846206665039px', height: '34px' }}>
                <img src={HSBverification} alt='HSB Verification' />
              </div>
            )}
          </div>
          
          {/* Distance and Address */}
          <div className="text-sm text-gray-600 mb-3">
            <p>{tech.distance}km away • {tech.address}</p>
          </div>
          
          {/* Services/Categories */}
          <div className="flex flex-wrap gap-2 mb-2">
            {tech.services.map((service, index) => (
              <span key={index} className="text-sm bg-[#F3F3F3] rounded p-1 text-gray-600">
                {service}
              </span>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={() => handleQuoteRequest(tech.id)}
              className={`w-52 h-10 flex items-center justify-center gap-2 font-semibold rounded-md shadow transition-colors duration-200 ${
                selectedQuotes.has(tech.id) 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'bg-[#AF2638] text-white hover:bg-red-700'
              }`}
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_39_695)">
                  <path d="M12.041 0.257324V2.9297H14.7132L12.041 0.257324Z" fill="white"/>
                  <path d="M11.6016 3.80859C11.3589 3.80859 11.1621 3.61184 11.1621 3.36914V0H4.86328C4.13634 0 3.54492 0.591416 3.54492 1.31836V6.23112C3.68971 6.218 3.83622 6.21094 3.98438 6.21094C5.48227 6.21094 6.82315 6.89578 7.71053 7.96875H12.4805C12.7232 7.96875 12.9199 8.16551 12.9199 8.4082C12.9199 8.6509 12.7232 8.84766 12.4805 8.84766H8.28949C8.56418 9.38367 8.74131 9.97749 8.79817 10.6055H12.4805C12.7232 10.6055 12.9199 10.8022 12.9199 11.0449C12.9199 11.2876 12.7232 11.4844 12.4805 11.4844H8.79817C8.66675 12.9357 7.89132 14.2039 6.76049 15H13.6523C14.3793 15 14.9707 14.4086 14.9707 13.6816V3.80859H11.6016ZM12.4805 6.21094H6.03516C5.79246 6.21094 5.5957 6.01418 5.5957 5.77148C5.5957 5.52879 5.79246 5.33203 6.03516 5.33203H12.4805C12.7232 5.33203 12.9199 5.52879 12.9199 5.77148C12.9199 6.01418 12.7232 6.21094 12.4805 6.21094Z" fill="white"/>
                  <path d="M3.98438 7.08984C1.80354 7.08984 0.0292969 8.86409 0.0292969 11.0449C0.0292969 13.2258 1.80354 15 3.98438 15C6.16521 15 7.93945 13.2258 7.93945 11.0449C7.93945 8.86409 6.16521 7.08984 3.98438 7.08984ZM3.74024 10.6055H4.22854C4.74006 10.6055 5.15625 11.0217 5.15625 11.5332V12.0215C5.15625 12.466 4.84189 12.8384 4.42383 12.9284V13.0957C4.42383 13.3384 4.22707 13.5352 3.98438 13.5352C3.74168 13.5352 3.54492 13.3384 3.54492 13.0957V12.9284C3.12686 12.8384 2.8125 12.466 2.8125 12.0215C2.8125 11.7788 3.00926 11.582 3.25195 11.582C3.49465 11.582 3.69141 11.7788 3.69141 12.0215C3.69141 12.0484 3.71332 12.0703 3.74024 12.0703H4.22854C4.25546 12.0703 4.27737 12.0484 4.27737 12.0215V11.5332C4.27737 11.5063 4.25546 11.4844 4.22854 11.4844H3.74024C3.22869 11.4844 2.8125 11.0682 2.8125 10.5566V10.0684C2.8125 9.62382 3.12686 9.25146 3.54492 9.16148V8.99414C3.54492 8.75145 3.74168 8.55469 3.98438 8.55469C4.22707 8.55469 4.42383 8.75145 4.42383 8.99414V9.16148C4.84189 9.25146 5.15625 9.62382 5.15625 10.0684C5.15625 10.3111 4.95949 10.5078 4.7168 10.5078C4.4741 10.5078 4.27734 10.3111 4.27734 10.0684C4.27734 10.0414 4.25543 10.0195 4.22851 10.0195H3.74021C3.71329 10.0195 3.69138 10.0414 3.69138 10.0684V10.5566C3.69141 10.5836 3.71332 10.6055 3.74024 10.6055Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_39_695">
                    <rect width="15" height="15" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              {selectedQuotes.has(tech.id) ? 'Quote Requested' : 'Get a free Quote'}
            </button>
          </div>
        </div>
        
        {/* Company Image */}
        <div className="bg-gray-200 flex-shrink-0 ml-4 overflow-hidden" style={{width: '244px', height: '161px', borderRadius: '10px'}}>
          <img 
            src={image} 
            alt={`${tech.name} workspace`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-white px-2 sm:px-8">
      {/* Header Section */}
      <div className="mb-4 sm:mb-6">
        <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-3'>
          <h2 className="font-roboto font-semibold text-2xl sm:text-[40px] leading-[100%] align-middle tracking-normal">
            HVAC Technicians in {searchFilters.city || 'Toronto'}
          </h2>
          <button 
            onClick={() => handleQuoteRequest('bulk')}
            className="w-full sm:w-52 h-10 flex items-center justify-center gap-2 bg-[#AF2638] text-white font-semibold rounded-md shadow hover:bg-red-700 transition-colors duration-200 text-sm sm:text-base"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_39_695)">
                <path d="M12.041 0.257324V2.9297H14.7132L12.041 0.257324Z" fill="white"/>
                <path d="M11.6016 3.80859C11.3589 3.80859 11.1621 3.61184 11.1621 3.36914V0H4.86328C4.13634 0 3.54492 0.591416 3.54492 1.31836V6.23112C3.68971 6.218 3.83622 6.21094 3.98438 6.21094C5.48227 6.21094 6.82315 6.89578 7.71053 7.96875H12.4805C12.7232 7.96875 12.9199 8.16551 12.9199 8.4082C12.9199 8.6509 12.7232 8.84766 12.4805 8.84766H8.28949C8.56418 9.38367 8.74131 9.97749 8.79817 10.6055H12.4805C12.7232 10.6055 12.9199 10.8022 12.9199 11.0449C12.9199 11.2876 12.7232 11.4844 12.4805 11.4844H8.79817C8.66675 12.9357 7.89132 14.2039 6.76049 15H13.6523C14.3793 15 14.9707 14.4086 14.9707 13.6816V3.80859H11.6016ZM12.4805 6.21094H6.03516C5.79246 6.21094 5.5957 6.01418 5.5957 5.77148C5.5957 5.52879 5.79246 5.33203 6.03516 5.33203H12.4805C12.7232 5.33203 12.9199 5.52879 12.9199 5.77148C12.9199 6.01418 12.7232 6.21094 12.4805 6.21094Z" fill="white"/>
                <path d="M3.98438 7.08984C1.80354 7.08984 0.0292969 8.86409 0.0292969 11.0449C0.0292969 13.2258 1.80354 15 3.98438 15C6.16521 15 7.93945 13.2258 7.93945 11.0449C7.93945 8.86409 6.16521 7.08984 3.98438 7.08984ZM3.74024 10.6055H4.22854C4.74006 10.6055 5.15625 11.0217 5.15625 11.5332V12.0215C5.15625 12.466 4.84189 12.8384 4.42383 12.9284V13.0957C4.42383 13.3384 4.22707 13.5352 3.98438 13.5352C3.74168 13.5352 3.54492 13.3384 3.54492 13.0957V12.9284C3.12686 12.8384 2.8125 12.466 2.8125 12.0215C2.8125 11.7788 3.00926 11.582 3.25195 11.582C3.49465 11.582 3.69141 11.7788 3.69141 12.0215C3.69141 12.0484 3.71332 12.0703 3.74024 12.0703H4.22854C4.25546 12.0703 4.27737 12.0484 4.27737 12.0215V11.5332C4.27737 11.5063 4.25546 11.4844 4.22854 11.4844H3.74024C3.22869 11.4844 2.8125 11.0682 2.8125 10.5566V10.0684C2.8125 9.62382 3.12686 9.25146 3.54492 9.16148V8.99414C3.54492 8.75145 3.74168 8.55469 3.98438 8.55469C4.22707 8.55469 4.42383 8.75145 4.42383 8.99414V9.16148C4.84189 9.25146 5.15625 9.62382 5.15625 10.0684C5.15625 10.3111 4.95949 10.5078 4.7168 10.5078C4.4741 10.5078 4.27734 10.3111 4.27734 10.0684C4.27734 10.0414 4.25543 10.0195 4.22851 10.0195H3.74021C3.71329 10.0195 3.69138 10.0414 3.69138 10.0684V10.5566C3.69141 10.5836 3.71332 10.6055 3.74024 10.6055Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_39_695">
                  <rect width="15" height="15" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            Get Multiple Quotes
          </button>
        </div>

        {/* Results Summary */}
        {(searchFilters.job || filteredTechnicians.length !== allTechnicians.length) && (
          <div className="mt-2 text-gray-600 text-sm">
            Found {filteredTechnicians.length} technician{filteredTechnicians.length !== 1 ? 's' : ''} 
            {searchFilters.job && ` for "${searchFilters.job}"`}
            {searchFilters.city && ` in ${searchFilters.city}`}
          </div>
        )}
        
        {/* Filters and Controls - Mobile Responsive */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 mt-4">
          <div className="flex items-center gap-2">
            <select 
              value={searchFilters.sortBy || ''}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="border border-gray-300 rounded px-2 sm:px-3 py-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Sort by</option>
              <option value="Rating">Rating</option>
              <option value="Reviews">Reviews</option>
              <option value="Distance">Distance</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <select 
              value={searchFilters.category || ''}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="border border-gray-300 rounded px-2 sm:px-3 py-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Categories</option>
              <option value="Heating">Heating</option>
              <option value="Cooling">Cooling</option>
              <option value="Installation">Installation</option>
              <option value="Repair">Repair</option>
              <option value="Emergency">Emergency</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="verified" 
              checked={searchFilters.starExpertsOnly || false}
              onChange={(e) => handleFilterChange('starExpertsOnly', e.target.checked)}
              className="rounded" 
            />
            <label htmlFor="verified" className="text-xs sm:text-sm text-gray-600">Star Experts</label>
          </div>
          
          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="business-verified" 
              checked={searchFilters.bureauVerifiedOnly || false}
              onChange={(e) => handleFilterChange('bureauVerifiedOnly', e.target.checked)}
              className="rounded" 
            />
            <label htmlFor="business-verified" className="text-xs sm:text-sm text-gray-600 hidden sm:block">Bureau Verified</label>
            <label htmlFor="business-verified" className="text-xs sm:text-sm text-gray-600 sm:hidden">Verified</label>
          </div>
          
          <button 
            onClick={() => setShowAllFilters(!showAllFilters)}
            className="bg-[#AF2638] text-white px-3 sm:px-4 py-1 sm:py-2 rounded text-xs sm:text-sm font-medium hover:bg-red-700 transition-colors"
          >
            {showAllFilters ? 'Hide' : 'More'} Filters
          </button>
        </div>

        {/* Advanced Filters - Mobile Responsive */}
        {showAllFilters && (
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Emergency Service</label>
                <select 
                  value={searchFilters.emergency || ''}
                  onChange={(e) => handleFilterChange('emergency', e.target.value)}
                  className="w-full border border-gray-300 rounded px-2 sm:px-3 py-1 text-xs sm:text-sm"
                >
                  <option value="">Any</option>
                  <option value="true">24/7 Available</option>
                  <option value="false">Regular Hours</option>
                </select>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Max Distance</label>
                <select 
                  value={searchFilters.maxDistance || ''}
                  onChange={(e) => handleFilterChange('maxDistance', e.target.value)}
                  className="w-full border border-gray-300 rounded px-2 sm:px-3 py-1 text-xs sm:text-sm"
                >
                  <option value="">Any Distance</option>
                  <option value="2">Within 2km</option>
                  <option value="5">Within 5km</option>
                  <option value="10">Within 10km</option>
                </select>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Min Reviews</label>
                <select 
                  value={searchFilters.minReviews || ''}
                  onChange={(e) => handleFilterChange('minReviews', e.target.value)}
                  className="w-full border border-gray-300 rounded px-2 sm:px-3 py-1 text-xs sm:text-sm"
                >
                  <option value="">Any</option>
                  <option value="50">50+ Reviews</option>
                  <option value="100">100+ Reviews</option>
                  <option value="150">150+ Reviews</option>
                </select>
              </div>
              <div className="flex items-end">
                <button 
                  onClick={() => updateSearchFilters({
                    sortBy: '', category: '', starExpertsOnly: false, 
                    bureauVerifiedOnly: false, minRating: '', emergency: '',
                    maxDistance: '', minReviews: ''
                  })}
                  className="w-full bg-gray-500 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm hover:bg-gray-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Recommended Section */}
        {recommendedTechnicians.length > 0 && (
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="w-6 h-8 sm:w-8 sm:h-10">
              <img src={LogoIcon} alt='logoicon' />
            </div>
            <span className="font-['Roboto'] font-medium text-lg sm:text-[30px] leading-[100%] align-middle text-[#213A59]">
              Recommended Experts Near You
            </span>
          </div>
        )}
      </div>

      <div className="px-0 sm:px-4">
        {/* Recommended Technicians */}
        {recommendedTechnicians.length > 0 && (
          <div className="mb-6 sm:mb-8">
            {recommendedTechnicians.map(tech => (
              <TechnicianCard key={tech.id} tech={tech} isRecommended={true} />
            ))}
          </div>
        )}

        {/* Other Technicians Section */}
        {otherTechnicians.length > 0 && (
          <>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-6 h-8 sm:w-8 sm:h-10">
                <img src={LogoIcon} alt='logoicon' />
              </div>
              <span className="font-['Roboto'] font-medium text-lg sm:text-[30px] leading-[100%] align-middle text-[#213A59]">
                Other Experts Near You
              </span>
            </div>

            <div className="">
              {otherTechnicians.map(tech => (
                <TechnicianCard key={tech.id} tech={tech} />
              ))}
            </div>
          </>
        )}

        {/* No Results Message */}
        {filteredTechnicians.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-base sm:text-lg mb-4">
              No technicians found matching your criteria
            </div>
            <button 
              onClick={() => updateSearchFilters({
                job: '', category: '', starExpertsOnly: false, 
                bureauVerifiedOnly: false, minRating: ''
              })}
              className="bg-[#AF2638] text-white px-4 sm:px-6 py-2 rounded font-medium hover:bg-red-700 transition-colors text-sm sm:text-base"
            >
              Clear Filters
            </button>
          </div>
        )}
        
        {/* Load More Button */}
        {displayedTechnicians < filteredTechnicians.length && (
          <div className="text-center mt-6 sm:mt-8">
            <button 
              onClick={loadMoreTechnicians}
              className="bg-red-600 text-white px-4 sm:px-6 py-2 rounded font-medium hover:bg-red-700 transition-colors mb-3 text-sm sm:text-base"
            >
              Load More ({filteredTechnicians.length - displayedTechnicians} remaining)
            </button>
          </div>
        )}

        {/* Quote Summary */}
        {selectedQuotes.size > 0 && (
          <div className="fixed bottom-4 right-4 bg-[#AF2638] text-white p-3 sm:p-4 rounded-lg shadow-lg">
            <div className="text-xs sm:text-sm font-medium">
              {selectedQuotes.size} quote{selectedQuotes.size !== 1 ? 's' : ''} requested
            </div>
            <button 
              onClick={() => setSelectedQuotes(new Set())}
              className="text-xs underline hover:no-underline"
            >
              Clear all
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechniciansList; 