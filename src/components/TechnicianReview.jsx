import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TechnicianReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Profile');
  const [showContactModal, setShowContactModal] = useState(false);

  // Sample technician data
  const techniciansData = {
    1: {
      id: 1,
      name: "All Green Energy Solutions",
      rating: 4.7,
      reviews: 500,
      services: ["HVAC contractor", "General contractor", "Window Contractor"],
      verified: true,
      emergency: true,
      distance: 2.3,
      category: "Heating",
      address: "7500 ON-27, Vaughan, ON L4H 0J2",
      phone: "+1 833-475-0705",
      website: "www.allgreenenergysolutions.com",
      description: "All Green Energy Solutions Net Zero is a energy y affordability solution provider in Ontario that provides innovative sustainable solutions to create a greener future. We specialize in building energy-efficient green homes and other projects that prioritize energy conservation, resource efficiency, and a reduced environmental footprint.",
      serviceAreas: "Toronto, Ontario; Vaughan, Ontario; Mississauga, Ontario",
      expertise: "HVAC contractor, General contractor, Window Contractor, Kitchen Renovation Company, Handyman, Landscaping Company, Carpenter, Plumber, Tiler, Architect, Bathroom Renovation Company, Demolition company, Mason, Cabinet maker, Metal worker, Pool company, Interior designer, Interior decorator, Concrete Specialist, Garage Specialist, Condominium/Apartment Specialist"
    }
  };

  // Sample reviews data
  const reviewsData = {
    1: [
      {
        id: 1,
        customerName: "User Full Name",
        rating: 4,
        date: "2024-01-15",
        service: "HVAC Service",
        comment: "I don't tend to write many reviews, however, I am extremely happy with the service from RCC Waterproofing. I have been working with many contractors while renovating my house, and have endured many ups and downs. However, with RCC, I had absolutely no issues. The consultant Jamie was great, Anthony Jr's crew was exceptional and Rita from the office was very congenial and professional. The crew did a great job, and cleaned up nicely. They were very courteous to the neighbors on either side of us, including the builder who is renovating next door. What a nice break after dealing with a variety of contractors.",
        verified: true,
        reviewCount: 4
      },
      {
        id: 2,
        customerName: "User Full Name",
        rating: 4,
        date: "2024-01-10",
        service: "Installation",
        comment: "I don't tend to write many reviews, however, I am extremely happy with the service from RCC Waterproofing. I have been working with many contractors while renovating my house, and have endured many ups and downs. However, with RCC, I had absolutely no issues. The consultant Jamie was great, Anthony Jr's crew was exceptional and Rita from the office was very congenial and professional. The crew did a great job, and cleaned up nicely. They were very courteous to the neighbors on either side of us, including the builder who is renovating next door. What a nice break after dealing with a variety of contractors.",
        verified: true,
        reviewCount: 4
      },
      {
        id: 3,
        customerName: "User Full Name",
        rating: 4,
        date: "2024-01-05",
        service: "Maintenance",
        comment: "I don't tend to write many reviews, however, I am extremely happy with the service from RCC Waterproofing. I have been working with many contractors while renovating my house, and have endured many ups and downs. However, with RCC, I had absolutely no issues. The consultant Jamie was great, Anthony Jr's crew was exceptional and Rita from the office was very congenial and professional. The crew did a great job, and cleaned up nicely. They were very courteous to the neighbors on either side of us, including the builder who is renovating next door. What a nice break after dealing with a variety of contractors.",
        verified: true,
        reviewCount: 4
      }
    ]
  };

  const technician = techniciansData[id];
  const reviews = reviewsData[id] || [];

  if (!technician) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technician Not Found</h2>
          <button 
            onClick={() => navigate('/')}
            className="bg-[#AF2638] text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const renderStars = (rating, size = "text-base") => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className={`flex ${size} text-yellow-400`}>
        {Array.from({ length: fullStars }, (_, i) => (
          <span key={i}>★</span>
        ))}
        {hasHalfStar && <span>☆</span>}
        {Array.from({ length: emptyStars }, (_, i) => (
          <span key={i} className="text-gray-300">☆</span>
        ))}
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Profile':
        return (
          <div className="space-y-6 md:space-y-8">
            {/* Good to know section */}
            <div>
              <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 text-black">Good to know</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center">
                  <svg className="w-3 h-3 md:w-4 md:h-4 mr-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm md:text-lg text-black">Verified by Home Service Bureau</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-3 h-3 md:w-4 md:h-4 mr-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-sm md:text-lg text-black">Offers warranty</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-3 h-3 md:w-4 md:h-4 mr-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-sm md:text-lg text-black">Trusted expert in your area</span>
                </div>
              </div>
            </div>
            
            {/* Expert In section */}
            <div>
              <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 text-black">Expert In</h3>
              <p className="text-sm md:text-lg text-black leading-relaxed">
                {technician.expertise}
              </p>
            </div>
            
            {/* About this company section */}
            <div>
              <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 text-black">About this company</h3>
              <p className="text-sm md:text-lg text-black leading-relaxed mb-4 md:mb-6">
                {technician.description}
              </p>
              <div>
                <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-black">Service Areas:</h4>
                <p className="text-sm md:text-lg text-black">
                  {technician.serviceAreas}
                </p>
              </div>
            </div>

            {/* Portfolio section */}
            <div>
              <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 text-black">Portfolio</h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4">
                {Array.from({ length: activeTab === 'Portfolio' ? 15 : 3 }, (_, i) => (
                  <div key={i} className="aspect-[3/2] bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="/portfolio-1.png" 
                      alt={`Portfolio ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              {activeTab === 'Profile' && (
                <div className="md:hidden flex justify-center mt-4">
                  <div className="flex space-x-2">
                    <button className="w-5 h-5 bg-gray-800 text-white rounded text-xs flex items-center justify-center">1</button>
                    <button className="w-5 h-5 bg-gray-300 text-black rounded text-xs flex items-center justify-center">2</button>
                    <button className="w-5 h-5 bg-gray-300 text-black rounded text-xs flex items-center justify-center">3</button>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Information section */}
            <div>
              <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 text-black">Contact Information</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center">
                  <svg className="w-3 h-3 md:w-4 md:h-4 mr-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span className="text-sm md:text-lg text-black">{technician.phone}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-3 h-3 md:w-4 md:h-4 mr-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.148.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.032 11H4.083a6.004 6.004 0 002.851 4.118z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm md:text-lg text-black">{technician.website}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-3 h-3 md:w-4 md:h-4 mr-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm md:text-lg text-black">{technician.address}</span>
                </div>
              </div>
            </div>
            
            {/* Social Media section */}
            <div>
              <div className="flex space-x-4 md:space-x-6">
                {['facebook', 'instagram', 'linkedin', 'twitter', 'youtube'].map((platform) => (
                  <div key={platform} className="w-4 h-4 md:w-5 md:h-5 bg-[#213A59] rounded flex items-center justify-center">
                    <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'Portfolio':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 text-black">Portfolio</h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4">
                {Array.from({ length: 15 }, (_, i) => (
                  <div key={i} className="aspect-[3/2] bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="/portfolio-1.png" 
                      alt={`Portfolio ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="md:hidden flex justify-center mt-4">
                <div className="flex space-x-2">
                  <button className="w-5 h-5 bg-gray-800 text-white rounded text-xs flex items-center justify-center">1</button>
                  <button className="w-5 h-5 bg-gray-300 text-black rounded text-xs flex items-center justify-center">2</button>
                  <button className="w-5 h-5 bg-gray-300 text-black rounded text-xs flex items-center justify-center">3</button>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'Reviews':
        return (
          <div className="space-y-4 md:space-y-6">
            {/* Reviews Header */}
            <div>
              <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3 text-black">Reviews</h3>
              <p className="text-sm md:text-lg font-semibold text-black mb-2">{technician.reviews} Verified Reviews</p>
              <div className="flex items-center gap-2 md:gap-4">
                <span className="text-sm md:text-lg font-semibold text-black">{technician.rating}/5</span>
                <div className="flex text-yellow-400">
                  {renderStars(technician.rating, "text-sm md:text-base")}
                </div>
                <span className="text-sm md:text-lg text-black">average rating</span>
              </div>
              <button className="md:hidden mt-4 bg-[#AF2638] text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-red-700 transition-colors">
                Write A Review
              </button>
            </div>
            
            {/* Reviews List */}
            <div className="space-y-4 md:space-y-8">
              {reviews.slice(0, 3).map((review, index) => (
                <div key={review.id}>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-gray-300 rounded-full flex-shrink-0 overflow-hidden">
                      <img 
                        src="/profile-avatar.png" 
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                        <h4 className="text-xs md:text-lg font-semibold text-black">{review.customerName}</h4>
                        <div className="flex text-yellow-400">
                          {renderStars(review.rating, "text-xs md:text-base")}
                        </div>
                      </div>
                      <p className="text-xs md:text-sm text-black mb-2 md:mb-4">{review.reviewCount} Reviews</p>
                      <p className="text-xs md:text-lg text-black leading-relaxed">{review.comment}</p>
                    </div>
                  </div>
                  {index < reviews.slice(0, 3).length - 1 && (
                    <hr className="mt-4 md:mt-8 border-gray-300" />
                  )}
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="flex justify-center mt-6 md:mt-8">
              <button className="bg-[#AF2638] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg text-xs md:text-lg font-medium hover:bg-red-700 transition-colors">
                Load More
              </button>
            </div>
          </div>
        );
      
      case 'Contact Info':
        return (
          <div className="space-y-4 md:space-y-6">
            <div>
              <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 text-black">Contact Information</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center">
                  <svg className="w-3 h-3 md:w-4 md:h-4 mr-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span className="text-sm md:text-lg text-black">{technician.phone}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-3 h-3 md:w-4 md:h-4 mr-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.148.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.032 11H4.083a6.004 6.004 0 002.851 4.118z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm md:text-lg text-black">{technician.website}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-3 h-3 md:w-4 md:h-4 mr-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm md:text-lg text-black">{technician.address}</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
     

      {/* Main Content Container */}
      <div className="max-w-[1500px] mx-auto md:px-0">
        {/* Hero Section - Desktop */}
        <div className="hidden md:block relative h-[600px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/hero-background.png)'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          {/* Company Info Content */}
          <div className="relative z-10 flex items-end h-full px-48 pb-12">
            <div className="flex items-end gap-8 w-full">
              {/* Company Logo */}
              <div className="w-60 h-60 bg-white rounded-lg shadow-lg flex items-center justify-center flex-shrink-0 p-4">
                <img 
                  src="/company-logo.png" 
                  alt="Company Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Company Details */}
              <div className="flex-1">
                <h1 className="text-4xl font-semibold text-white mb-2">{technician.name}</h1>
                <p className="text-xl text-white mb-2">HVAC Technician</p>
                <p className="text-xl text-white mb-8">{technician.address}</p>
                
                <div className="flex items-center gap-6">
                  <button 
                    onClick={() => setShowContactModal(true)}
                    className="bg-[#AF2638] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-red-700 transition-colors flex items-center gap-3"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                    Get a Free Quote
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    Write a Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section - Mobile */}
        <div className="md:hidden">
          {/* Background Image */}
          <div 
            className="h-[200px] bg-cover bg-center relative"
            style={{
              backgroundImage: 'url(/herobackgroundmobile.png)'
            }}
          >
            <div className="absolute inset-0  bg-opacity-50"></div>
          </div>
          
          {/* Company Logo */}
          <div className="flex justify-center -mt-16 relative z-10 mb-4">
            <div className="w-32 h-32 lg:w-32 lg:h-32 bg-white rounded-lg shadow-lg flex items-center justify-center border border-gray-300 p-2">
              <img 
                src="/company-logo.png" 
                alt="Company Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Company Name */}
          <div className="text-center mb-4">
            <h1 className="text-xl font-semibold text-black mb-2">{technician.name}</h1>
            
            {/* HSB Verification Badges */}
            <div className="flex justify-center gap-2 mb-4">
              <img 
                src="/HSBverification.png" 
                alt="HSB Verification"
                className="h-6 w-auto object-contain"
              />
              <img 
                src="/HSBverification.png" 
                alt="HSB Verification"
                className="h-6 w-auto object-contain"
              />
            </div>
          </div>

          {/* Mobile Action Buttons */}
          <div className="px-5">
            <div className="flex gap-3 mb-6">
              <button className="flex-1 bg-[#26AF2D] text-white py-2.5  text-xs font-medium">
                Call Now
              </button>
              <button 
                onClick={() => setShowContactModal(true)}
                className="flex-1 bg-[#AF2638] text-white py-2.5  text-xs font-medium"
              >
                Get A Free Quote
              </button>
              <button className="flex-1 bg-[#213A59] text-white py-2.5  text-xs font-medium">
                Write A Review
              </button>
            </div>
          </div>
        </div>

        {/* Bureau Score Section */}
        <div className="bg-gray-100 md:bg-gray-100 px-5 md:px-48 py-6 md:py-24">
          <div className="bg-white md:bg-white rounded-lg md:rounded-2xl p-5 md:p-14 shadow-sm">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:flex md:items-center md:gap-16">
                <div>
                  <h2 className="text-base md:text-3xl font-semibold text-black mb-3 md:mb-6">Bureau Score</h2>
                  <div className="flex items-center gap-4 md:gap-8 mb-4 md:mb-0">
                    <div className="text-center md:text-left">
                      <div className="text-base md:text-4xl font-semibold text-black mb-1 md:mb-2">{technician.rating}</div>
                      <div className="flex text-yellow-400 text-sm md:text-2xl">
                        {renderStars(technician.rating, "text-sm md:text-2xl")}
                      </div>
                    </div>
                    <div className="md:hidden">
                      <p className="text-xs text-black">based on {technician.reviews.toLocaleString()} Reviews</p>
                    </div>
                  </div>
                  <div className="space-y-3 md:space-y-6">
                    <div className="flex items-center gap-3 md:gap-6">
                      <span className="text-xs md:text-base text-black w-16 md:w-24">Quality of Work</span>
                      <div className="w-32 md:w-42 h-2.5 md:h-3 bg-gray-300 rounded-full">
                        <div className="w-[56%] h-full bg-[#213A59] rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 md:gap-6">
                      <span className="text-xs md:text-base text-black w-16 md:w-24">Response Time</span>
                      <div className="w-32 md:w-42 h-2.5 md:h-3 bg-gray-300 rounded-full">
                        <div className="w-[80%] h-full bg-[#213A59] rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 md:gap-6">
                      <span className="text-xs md:text-base text-black w-16 md:w-24">Budget</span>
                      <div className="w-32 md:w-42 h-2.5 md:h-3 bg-gray-300 rounded-full">
                        <div className="w-[96%] h-full bg-[#213A59] rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 md:gap-6">
                      <span className="text-xs md:text-base text-black w-16 md:w-24">Communication</span>
                      <div className="w-32 md:w-42 h-2.5 md:h-3 bg-gray-300 rounded-full">
                        <div className="w-[86%] h-full bg-[#213A59] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block border-l border-gray-300 h-24 mx-8"></div>
                
                <div className="hidden md:block">
                  <p className="text-base font-semibold text-black mb-6">Review by score</p>
                  <div className="text-4xl font-semibold text-black mb-2">4.7/5</div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-6">
                      <span className="text-base text-black w-24">Quality of Work</span>
                      <div className="w-42 h-3 bg-gray-300 rounded-full">
                        <div className="w-[56%] h-full bg-[#213A59] rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-base text-black w-24">Response Time</span>
                      <div className="w-42 h-3 bg-gray-300 rounded-full">
                        <div className="w-[80%] h-full bg-[#213A59] rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-base text-black w-24">Budget</span>
                      <div className="w-42 h-3 bg-gray-300 rounded-full">
                        <div className="w-[96%] h-full bg-[#213A59] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:flex md:items-center md:gap-6">
                <div className="w-36 h-12">
                  <img 
                    src="/hsb-verification-1.png" 
                    alt="HSB Verification"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-36 h-12">
                  <img 
                    src="/hsb-verification-1.png" 
                    alt="HSB Verification"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-5 md:px-48">
          <div className="flex border-b border-gray-300 overflow-x-auto">
            {['Profile', 'Portfolio', 'Reviews', 'Contact Info'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 md:px-6 py-3 md:py-4 text-sm md:text-3xl font-normal border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-[#AF2638] text-[#AF2638] bg-red-50'
                    : 'border-transparent text-black hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="px-5 md:px-48 py-6 md:py-16">
          {renderTabContent()}
        </div>

     

      
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 md:p-8 max-w-sm md:max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h3 className="text-lg md:text-xl font-semibold">Contact {technician.name}</h3>
              <button 
                onClick={() => setShowContactModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <p className="text-base md:text-lg font-semibold text-blue-600">{technician.phone}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <p className="text-sm text-gray-600">{technician.address}</p>
              </div>
              <div className="flex gap-3 pt-4">
                <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  Call Now
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnicianReview;