import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BusinessPosting = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1); // 1 = basic info, 2 = services
  const [formData, setFormData] = useState({
    // Step 1 fields
    firstName: '',
    lastName: '',
    personalPhone: '',
    personalEmail: '',
    businessName: '',
    businessPhone: '',
    businessEmail: '',
    businessAddress: '',
    streetAddress: '',
    city: '',
    province: '',
    country: '',
    postalCode: '',
    logoFile: null,
    
    // Step 2 fields
    services: ['HVAC', 'HVAC', 'HVAC', 'HVAC', 'HVAC', 'HVAC'], // Pre-selected services
    businessWebsite: '',
    businessDescription: '',
    providesInsurance: '',
    insuranceNumber: '',
    acceptedPayments: [],
    businessHours: {
      monday: { start: '7:00 AM', end: '7:00 PM', closed: false },
      tuesday: { start: '7:00 AM', end: '7:00 PM', closed: false },
      wednesday: { start: '7:00 AM', end: '7:00 PM', closed: false }
    },
    serviceRadius: { city: '', distance: '10 km' },
    googleMapsLink: '',
    workPhotos: null
  });

  const handleInputChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value
    }));
  };

  const handlePaymentChange = (payment) => {
    setFormData(prev => ({
      ...prev,
      acceptedPayments: prev.acceptedPayments.includes(payment)
        ? prev.acceptedPayments.filter(p => p !== payment)
        : [...prev.acceptedPayments, payment]
    }));
  };

  const removeService = (index) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index)
    }));
  };

  const handleSelectServices = () => {
    setCurrentStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Business registration submitted:', formData);
    alert('Business registration submitted successfully!');
    navigate('/');
  };

  // Step 1 - Basic Information Form
  if (currentStep === 1) {
    return (
      <div className="min-h-screen w-full max-w-[1500px] mx-auto bg-white">
        <div className="px-4 sm:px-8 md:px-16 lg:px-[199px] py-8 lg:py-[70px]">
          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-black font-roboto mb-8 lg:mb-[56px]">Join as bureau expert!</h1>
          
          <form className="space-y-8 lg:space-y-[56px]">
            {/* Your full name section */}
            <div>
              <p className="text-base lg:text-[18px] font-roboto text-black mb-4 lg:mb-[22px]">Your full name</p>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-[25px]">
                <div className="w-full sm:w-[310px] h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[12px]">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full bg-transparent text-base lg:text-[18px] font-light font-roboto text-black placeholder-black outline-none"
                  />
                </div>
                <div className="w-full sm:w-[310px] h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[12px]">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full bg-transparent text-base lg:text-[18px] font-light font-roboto text-black placeholder-black outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Your Contact Details */}
            <div>
              <p className="text-base lg:text-[18px] font-roboto text-black mb-4 lg:mb-[22px]">Your Contact Details</p>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-[25px]">
                <div className="w-full sm:w-[310px] h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[12px]">
                  <input
                    type="tel"
                    name="personalPhone"
                    value={formData.personalPhone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full bg-transparent text-base lg:text-[18px] font-light font-roboto text-black placeholder-black outline-none"
                  />
                </div>
                <div className="w-full sm:w-[310px] h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[12px]">
                  <input
                    type="email"
                    name="personalEmail"
                    value={formData.personalEmail}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full bg-transparent text-base lg:text-[18px] font-light font-roboto text-black placeholder-black outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Your Business Details */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-black font-roboto mb-8 lg:mb-[56px]">Your Business Details</h2>
              
              {/* Full Business Name */}
              <div className="mb-4 lg:mb-[22px]">
                <p className="text-base lg:text-[18px] font-roboto text-black mb-4 lg:mb-[22px]">Full Business Name</p>
                <div className="w-full max-w-[645px] h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[12px]">
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="Business Name"
                    className="w-full bg-transparent text-base lg:text-[18px] font-light font-roboto text-black placeholder-black outline-none"
                  />
                </div>
              </div>

              {/* Business's Contact Details */}
              <div className="mb-8 lg:mb-[56px]">
                <p className="text-base lg:text-[18px] font-roboto text-black mb-4 lg:mb-[22px]">Business's Contact Details</p>
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-[25px]">
                  <div className="w-full sm:w-[310px] h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[12px]">
                    <input
                      type="tel"
                      name="businessPhone"
                      value={formData.businessPhone}
                      onChange={handleInputChange}
                      placeholder="Business Phone Number"
                      className="w-full bg-transparent text-base lg:text-[18px] font-light font-roboto text-black placeholder-black outline-none"
                    />
                  </div>
                  <div className="w-full sm:w-[310px] h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[12px]">
                    <input
                      type="email"
                      name="businessEmail"
                      value={formData.businessEmail}
                      onChange={handleInputChange}
                      placeholder="Business Email"
                      className="w-full bg-transparent text-base lg:text-[18px] font-light font-roboto text-black placeholder-black outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Business Address */}
              <div className="mb-8 lg:mb-[56px]">
                <p className="text-base lg:text-[18px] font-roboto text-black mb-4 lg:mb-[22px]">Business Address</p>
                <div className="w-full max-w-[645px] h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[12px] mb-4 lg:mb-[22px]">
                  <input
                    type="text"
                    name="businessAddress"
                    value={formData.businessAddress}
                    onChange={handleInputChange}
                    placeholder="Search Business Address"
                    className="w-full bg-transparent text-base lg:text-[18px] font-light font-roboto text-black placeholder-black outline-none"
                  />
                </div>

                <p className="text-base lg:text-[18px] font-roboto text-black mb-4 lg:mb-[22px]">Street Address</p>
                <div className="w-full max-w-[645px] h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[12px] mb-8 lg:mb-[56px]">
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    placeholder="Select One"
                    className="w-full bg-transparent text-base lg:text-[18px] font-light font-roboto text-black placeholder-black outline-none"
                  />
                </div>

                {/* City and Province */}
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-[25px] mb-4 lg:mb-[22px]">
                  <div className="w-full sm:w-[310px]">
                    <p className="text-base lg:text-[18px] font-roboto text-black mb-4 lg:mb-[22px]">City</p>
                    <div className="w-full h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[12px]">
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        className="w-full bg-transparent text-base lg:text-[18px] font-light font-roboto text-black placeholder-black outline-none"
                      />
                    </div>
                  </div>
                  <div className="w-full sm:w-[310px]">
                    <p className="text-base lg:text-[18px] font-roboto text-black mb-4 lg:mb-[22px]">Province</p>
                    <div className="w-full h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[12px]">
                      <input
                        type="text"
                        name="province"
                        value={formData.province}
                        onChange={handleInputChange}
                        placeholder="Province"
                        className="w-full bg-transparent text-base lg:text-[18px] font-light font-roboto text-black placeholder-black outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Country and Postal Code */}
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-[25px]">
                  <div className="w-full sm:w-[310px]">
                    <p className="text-base lg:text-[18px] font-roboto text-black mb-4 lg:mb-[22px]">Country</p>
                    <div className="w-full h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[12px]">
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder="Country"
                        className="w-full bg-transparent text-base lg:text-[18px] font-light font-roboto text-black placeholder-black outline-none"
                      />
                    </div>
                  </div>
                  <div className="w-full sm:w-[310px]">
                    <p className="text-base lg:text-[18px] font-roboto text-black mb-4 lg:mb-[22px]">Postal Code</p>
                    <div className="w-full h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[12px]">
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        placeholder="Postal code"
                        className="w-full bg-transparent text-base lg:text-[18px] font-light font-roboto text-black placeholder-black outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Upload business logo */}
              <div className="mb-8 lg:mb-[56px]">
                <p className="text-base lg:text-[18px] font-roboto text-black mb-4 lg:mb-[22px]">Upload business logo</p>
                <div className="w-full max-w-[650px] h-[119px] bg-[#F3F3F3] rounded-[10px] flex items-center justify-center">
                  <label htmlFor="logoFile" className="cursor-pointer">
                    <input
                      type="file"
                      id="logoFile"
                      name="logoFile"
                      onChange={handleInputChange}
                      accept="image/*"
                      className="hidden"
                    />
                    <span className="text-lg lg:text-[25px] font-extralight font-roboto text-black/50">Drop your files here</span>
                  </label>
                </div>
              </div>

              {/* Select Your Services Button */}
              <div>
                <button
                  type="button"
                  onClick={handleSelectServices}
                  className="w-full sm:w-[235px] h-[46px] bg-[#AF2638] rounded-[10px] flex items-center justify-center"
                >
                  <span className="text-base lg:text-[18px] font-semibold font-roboto text-white">Select Your Services</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Step 2 - Services Selection Form
  return (
    <div className="min-h-screen w-full max-w-[1500px] mx-auto bg-white">
      <div className="px-4 sm:px-8 md:px-16 lg:px-[199px] py-8 lg:py-[70px]">
        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-black font-roboto mb-8 lg:mb-[56px]">Select services your provide and details</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8 lg:space-y-[56px]">
          {/* Select all the services */}
          <div>
            <p className="text-base lg:text-[18px] font-roboto text-black mb-4 lg:mb-[22px]">Select all the services that you provide</p>
            <div className="w-full max-w-[650px] min-h-[177px] bg-white border border-black rounded-[10px] p-[14px]">
              <div className="flex flex-wrap gap-3 lg:gap-[20px]">
                {formData.services.map((service, index) => (
                  <div key={index} className="min-w-[100px] lg:w-[110px] h-[41px] bg-[#E5E5E5] rounded-[2px] flex items-center justify-between px-3 lg:px-[18px]">
                    <span className="text-sm lg:text-[18px] font-roboto text-black leading-[27px]">{service}</span>
                    <button
                      type="button"
                      onClick={() => removeService(index)}
                      className="text-sm lg:text-[18px] font-roboto text-black leading-[27px] ml-2"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Business Details */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-black font-roboto mb-8 lg:mb-[56px]">Additional Business Details</h2>
            
            {/* Business website */}
            <div className="mb-8 lg:mb-[56px]">
              <p className="text-base lg:text-[18px] font-roboto text-black mb-4 lg:mb-[22px]">Business website</p>
              <div className="w-full max-w-[645px] h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[12px]">
                <input
                  type="url"
                  name="businessWebsite"
                  value={formData.businessWebsite}
                  onChange={handleInputChange}
                  placeholder="www.homeservicebureau.com"
                  className="w-full bg-transparent text-base lg:text-[18px] font-light font-roboto text-black placeholder-black outline-none"
                />
              </div>
            </div>

            {/* Business description */}
            <div className="mb-8 lg:mb-[56px]">
              <p className="text-base lg:text-[18px] font-roboto text-black mb-4 lg:mb-[22px]">Business description</p>
              <div className="w-full max-w-[650px] h-[120px] lg:h-[177px] bg-white border border-black rounded-[10px] p-[11px]">
                <textarea
                  name="businessDescription"
                  value={formData.businessDescription}
                  onChange={handleInputChange}
                  placeholder="Tell us about your business, and why should homeowners trust your service"
                  className="w-full h-full bg-transparent text-base lg:text-[18px] font-light font-roboto text-black placeholder-black outline-none resize-none leading-[27px]"
                />
              </div>
            </div>

            {/* Add pictures */}
            <div className="mb-8 lg:mb-[56px]">
              <p className="text-base lg:text-[18px] font-roboto text-black mb-4 lg:mb-[22px]">Add some picture of previous work you have done (optional)</p>
              <div className="flex flex-col sm:flex-row items-start gap-3 lg:gap-[12px]">
                <div className="w-full max-w-[650px] h-[119px] bg-[#F3F3F3] rounded-[10px] flex items-center justify-center">
                  <label htmlFor="workPhotos" className="cursor-pointer">
                    <input
                      type="file"
                      id="workPhotos"
                      name="workPhotos"
                      onChange={handleInputChange}
                      accept="image/*"
                      multiple
                      className="hidden"
                    />
                    <span className="text-lg lg:text-[25px] font-extralight font-roboto text-black/50">Drop your files here</span>
                  </label>
                </div>
                <div className="w-[68px] h-[23px] bg-[#F3F3F3] rounded-[5px] flex items-center justify-center">
                  <span className="text-[10px] font-light font-roboto text-black/50">Add More</span>
                </div>
              </div>
            </div>

            {/* Operating business hours */}
            <div className="mb-8 lg:mb-[56px]">
              <p className="text-base lg:text-[18px] font-roboto text-black mb-4 lg:mb-[22px]">Operating business hours</p>
              
              {/* Monday */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-[19px] mb-3 lg:mb-[14px]">
                <div className="flex items-center gap-3">
                  <div className="w-[100px] lg:w-[126px] h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[13px]">
                    <span className="text-sm lg:text-[18px] font-light font-roboto text-black">7:00 AM</span>
                  </div>
                  <span className="text-base lg:text-[18px] font-light font-roboto text-black">-</span>
                  <div className="w-[100px] lg:w-[126px] h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[13px]">
                    <span className="text-sm lg:text-[18px] font-light font-roboto text-black">7:00 PM</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 lg:gap-[11px]">
                  <div className="w-[20px] h-[20px] border-2 border-black rounded-full"></div>
                  <span className="text-sm lg:text-[18px] font-light font-roboto text-black">Closed?</span>
                </div>
              </div>

              {/* Tuesday */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-[19px] mb-3 lg:mb-[14px]">
                <div className="flex items-center gap-3">
                  <div className="w-[100px] lg:w-[126px] h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[13px]">
                    <span className="text-sm lg:text-[18px] font-light font-roboto text-black">7:00 AM</span>
                  </div>
                  <span className="text-base lg:text-[18px] font-light font-roboto text-black">-</span>
                  <div className="w-[100px] lg:w-[126px] h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[13px]">
                    <span className="text-sm lg:text-[18px] font-light font-roboto text-black">7:00 PM</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 lg:gap-[11px]">
                  <div className="w-[20px] h-[20px] border-2 border-black rounded-full"></div>
                  <span className="text-sm lg:text-[18px] font-light font-roboto text-black">Closed?</span>
                </div>
              </div>

              {/* Wednesday */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-[19px]">
                <div className="flex items-center gap-3">
                  <div className="w-[100px] lg:w-[126px] h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[13px]">
                    <span className="text-sm lg:text-[18px] font-light font-roboto text-black">7:00 AM</span>
                  </div>
                  <span className="text-base lg:text-[18px] font-light font-roboto text-black">-</span>
                  <div className="w-[100px] lg:w-[126px] h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[13px]">
                    <span className="text-sm lg:text-[18px] font-light font-roboto text-black">7:00 PM</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 lg:gap-[11px]">
                  <div className="w-[20px] h-[20px] border-2 border-black rounded-full"></div>
                  <span className="text-sm lg:text-[18px] font-light font-roboto text-black">Closed?</span>
                </div>
              </div>
            </div>

            {/* Service radius */}
            <div className="mb-8 lg:mb-[56px]">
              <p className="text-base lg:text-[18px] font-roboto text-black mb-4 lg:mb-[22px]">Service radius</p>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-[12px]">
                <div className="w-full sm:w-[355px] h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[13px]">
                  <input
                    type="text"
                    placeholder="Pick your city"
                    className="w-full bg-transparent text-base lg:text-[18px] font-light font-roboto text-black placeholder-black outline-none"
                  />
                </div>
                <div className="w-full sm:w-[197px] h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[13px]">
                  <input
                    type="text"
                    placeholder="10 km"
                    className="w-full bg-transparent text-base lg:text-[18px] font-light font-roboto text-black placeholder-black outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Insurance/warranty */}
            <div className="mb-8 lg:mb-[56px]">
              <p className="text-base lg:text-[18px] font-roboto text-black mb-4 lg:mb-[22px]">Do you provide insurance/warranty on your services?</p>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-[56px] mb-4 lg:mb-[22px]">
                <div className="flex items-center gap-3 lg:gap-[14px]">
                  <div className="w-[20px] h-[20px] border-2 border-black rounded-full"></div>
                  <span className="text-sm lg:text-[18px] font-light font-roboto text-black">Yes, we do provide insurance/warranty</span>
                </div>
                <div className="flex items-center gap-3 lg:gap-[14px]">
                  <div className="w-[20px] h-[20px] border-2 border-black rounded-full"></div>
                  <span className="text-sm lg:text-[18px] font-light font-roboto text-black">No, we don't provide it</span>
                </div>
              </div>

              <p className="text-base lg:text-[18px] font-roboto text-black mb-4 lg:mb-[22px]">Insurance number, if your provide insurance on your services (optional)</p>
              <div className="w-full max-w-[645px] h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[12px]">
                <input
                  type="text"
                  name="insuranceNumber"
                  value={formData.insuranceNumber}
                  onChange={handleInputChange}
                  placeholder="Insurance number"
                  className="w-full bg-transparent text-base lg:text-[18px] font-light font-roboto text-black placeholder-black outline-none"
                />
              </div>
            </div>

            {/* Payment methods */}
            <div className="mb-8 lg:mb-[56px]">
              <p className="text-base lg:text-[18px] font-roboto text-black mb-4 lg:mb-[22px]">Payment methods you accept (select all that applies)</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:gap-[66px] gap-4">
                <div className="flex items-center gap-2 lg:gap-[7px]">
                  <div className="w-[27px] h-[27px] border-[3px] border-black rounded-full"></div>
                  <span className="text-base lg:text-[18px] font-light font-roboto text-black">Cash</span>
                </div>
                <div className="flex items-center gap-2 lg:gap-[7px]">
                  <div className="w-[27px] h-[27px] border-[3px] border-black rounded-full"></div>
                  <span className="text-base lg:text-[18px] font-light font-roboto text-black">Debit Card</span>
                </div>
                <div className="flex items-center gap-2 lg:gap-[7px]">
                  <div className="w-[27px] h-[27px] border-[3px] border-black rounded-full"></div>
                  <span className="text-base lg:text-[18px] font-light font-roboto text-black">Credit Card</span>
                </div>
                <div className="flex items-center gap-2 lg:gap-[7px]">
                  <div className="w-[27px] h-[27px] border-[3px] border-black rounded-full"></div>
                  <span className="text-base lg:text-[18px] font-light font-roboto text-black">Financing</span>
                </div>
              </div>
            </div>

            {/* Google maps profile */}
            <div className="mb-8 lg:mb-[56px]">
              <p className="text-base lg:text-[18px] font-roboto text-black mb-4 lg:mb-[22px]">Enable your google reviews. Please share your Google profile link from maps.</p>
              <div className="w-full max-w-[645px] h-[46px] bg-white border border-black rounded-[10px] flex items-center px-[12px]">
                <input
                  type="url"
                  name="googleMapsLink"
                  value={formData.googleMapsLink}
                  onChange={handleInputChange}
                  placeholder="Google maps profile link"
                  className="w-full bg-transparent text-base lg:text-[18px] font-light font-roboto text-black placeholder-black outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full sm:w-[235px] h-[46px] bg-[#AF2638] rounded-[10px] flex items-center justify-center"
              >
                <span className="text-base lg:text-[18px] font-semibold font-roboto text-white">Submit Your Details</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusinessPosting; 