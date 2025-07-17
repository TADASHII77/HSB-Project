import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TechnicianReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample technician data (in a real app, this would come from an API or state management)
  const techniciansData = {
    1: {
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
    2: {
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
    3: {
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
    }
  };

  // Sample reviews data
  const reviewsData = {
    1: [
      {
        id: 1,
        customerName: "Sarah Johnson",
        rating: 5,
        date: "2024-01-15",
        service: "Furnace Repair",
        comment: "Excellent service! The technician arrived on time and fixed our heating issue quickly. Very professional and knowledgeable.",
        verified: true
      },
      {
        id: 2,
        customerName: "Mike Chen",
        rating: 4,
        date: "2024-01-10",
        service: "AC Installation",
        comment: "Great work installing our new air conditioning system. Clean installation and good explanation of the system.",
        verified: true
      },
      {
        id: 3,
        customerName: "Emily Davis",
        rating: 5,
        date: "2024-01-05",
        service: "Emergency Repair",
        comment: "Called for emergency heating repair on a weekend. They came out quickly and got our heat working again. Highly recommend!",
        verified: true
      }
    ],
    2: [
      {
        id: 4,
        customerName: "Robert Wilson",
        rating: 5,
        date: "2024-01-12",
        service: "Duct Cleaning",
        comment: "Thorough duct cleaning service. The team was professional and left everything clean. Noticed improved air quality immediately.",
        verified: true
      },
      {
        id: 5,
        customerName: "Lisa Thompson",
        rating: 4,
        date: "2024-01-08",
        service: "Furnace Service",
        comment: "Good maintenance service. Technician was knowledgeable and explained what needed to be done.",
        verified: true
      }
    ],
    3: [
      {
        id: 6,
        customerName: "David Brown",
        rating: 5,
        date: "2024-01-14",
        service: "HVAC Installation",
        comment: "Outstanding installation service. The team was professional, efficient, and cleaned up after themselves. Very satisfied!",
        verified: true
      },
      {
        id: 7,
        customerName: "Jennifer Lee",
        rating: 4,
        date: "2024-01-09",
        service: "Maintenance",
        comment: "Regular maintenance service was thorough. Good value for money and professional service.",
        verified: true
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Search Results
          </button>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src="/Agesolutions.png" alt={technician.name} className="w-16 h-16 object-contain" />
              </div>
            </div>
            
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{technician.name}</h1>
              <div className="flex items-center gap-4 mb-2">
                {renderStars(technician.rating)}
                <span className="text-lg font-medium text-gray-900">{technician.rating}</span>
                <span className="text-gray-600">({technician.reviews} Reviews)</span>
                {technician.verified && (
                  <div className="w-16 h-6">
                    <img src="/HSBverification.png" alt='HSB Verification' className="w-full h-full object-contain" />
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {technician.services.map((service, index) => (
                  <span key={index} className="text-sm bg-gray-100 rounded px-2 py-1 text-gray-600">
                    {service}
                  </span>
                ))}
              </div>
              
              <div className="text-gray-600">
                <p>{technician.distance}km away • {technician.address}</p>
                <p className="mt-1">{technician.phone}</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 sm:flex-row">
              <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" fill="currentColor"/>
                </svg>
                Call Now
              </button>
              
              <button className="bg-[#AF2638] text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
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
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
          
          {reviews.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No reviews available for this technician yet.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{review.customerName}</h3>
                        {review.verified && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            Verified Customer
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        {renderStars(review.rating)}
                        <span className="text-sm text-gray-600">{formatDate(review.date)}</span>
                        <span className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-600">
                          {review.service}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Additional Information */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Areas</h3>
            <div className="space-y-2">
              <p className="text-gray-600">Primary Service Area: {technician.distance}km radius</p>
              <p className="text-gray-600">Emergency Service: {technician.emergency ? 'Available 24/7' : 'Regular hours only'}</p>
              <p className="text-gray-600">Verification Status: {technician.verified ? 'HSB Verified' : 'Not verified'}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Specializations</h3>
            <div className="flex flex-wrap gap-2">
              {technician.services.map((service, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicianReview;