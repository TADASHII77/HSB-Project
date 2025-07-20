import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#213A59] text-white pt-8 mt-auto">
      <div className="max-w-7xl mx-auto mb-8 px-4">
        <h4 className="mb-4 text-white font-roboto font-bold text-[30px] hidden sm:block">Home Service Bureau</h4>
        
        {/* Mobile Layout */}
        <div className="block sm:hidden">
          <h4 className="mb-6 text-white font-roboto font-bold text-xl">Home Service Bureau</h4>
          <div className="space-y-4 text-sm">
            <div>
              <ul className="space-y-3 text-gray-300">
                <li><a href="/job" className="hover:text-white">Post a job</a></li>
                <li><a href="/" className="hover:text-white">Find local experts</a></li>
                <li><a href="/business" className="hover:text-white">Register your business</a></li>
                <li><a href="#" className="hover:text-white">Customer help desk</a></li>
                <li><a href="#" className="hover:text-white">Experts help desk</a></li>
              </ul>
            </div>
            
            <div>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white">About us</a></li>
                <li><a href="#" className="hover:text-white">Terms of service</a></li>
                <li><a href="#" className="hover:text-white">Privacy policy</a></li>
                <li><a href="#" className="hover:text-white">Quality requirements</a></li>
                <li><a href="#" className="hover:text-white">Consumer protection</a></li>
              </ul>
            </div>
            
            <div>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Top cities</a></li>
                <li><a href="#" className="hover:text-white">Prices</a></li>
                <li><a href="#" className="hover:text-white">Write a review</a></li>
                <li><a href="#" className="hover:text-white">HSB Blogs</a></li>
              </ul>
            </div>
          </div>
          
          {/* Social Media Icons for Mobile */}
          <div className="flex space-x-4 mt-6 mb-6">
            <a href="#" className="text-white hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.251 3.362 9.7 8.04 11.258.588-.109 1.151-.241 1.695-.412v-3.947h-2.146v-3.374h2.146V12.93c0-2.12 1.267-3.287 3.186-3.287.925 0 1.72.069 1.951.1v2.26h-1.338c-1.05 0-1.253.5-1.253 1.233v1.616h2.505l-.327 3.374h-2.178v3.793c4.503-1.474 7.757-5.646 7.757-10.671C24.005 5.367 18.638.001 12.017.001z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.0962V13.0956Z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:grid grid-cols-3 gap-8 text-sm">
          <div>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/job" className="hover:text-white">Post a job</a></li>
              <li><a href="/" className="hover:text-white">Find local experts</a></li>
              <li><a href="/business" className="hover:text-white">Register your business</a></li>
              <li><a href="#" className="hover:text-white">Customer help desk</a></li>
              <li><a href="#" className="hover:text-white">Experts help desk</a></li>
            </ul>
          </div>
          
          <div>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">About us</a></li>
              <li><a href="#" className="hover:text-white">Terms of service</a></li>
              <li><a href="#" className="hover:text-white">Privacy policy</a></li>
              <li><a href="#" className="hover:text-white">Quality requirements</a></li>
              <li><a href="#" className="hover:text-white">Consumer protection</a></li>
            </ul>
          </div>
          
          <div>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Top cities</a></li>
              <li><a href="#" className="hover:text-white">Prices</a></li>
              <li><a href="#" className="hover:text-white">Write a review</a></li>
              <li><a href="#" className="hover:text-white">HSB Blogs</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Desktop Bottom Section */}
      <div className="hidden sm:flex bg-white px-10 border-t border-gray-600 py-6 justify-between items-center">
        <div className="flex space-x-4">
          <a href="#" className="text-[#213A59] hover:text-gray-600">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_61_320)">
          <path d="M17.0703 0H2.92969C1.31439 0 0 1.31439 0 2.92969V17.0703C0 18.6856 1.31439 20 2.92969 20H8.82812V12.9297H6.48438V9.41406H8.82812V7.03125C8.82812 5.09262 10.4051 3.51562 12.3438 3.51562H15.8984V7.03125H12.3438V9.41406H15.8984L15.3125 12.9297H12.3438V20H17.0703C18.6856 20 20 18.6856 20 17.0703V2.92969C20 1.31439 18.6856 0 17.0703 0Z" fill="#213A59"/>
          </g>
          <defs>
          <clipPath id="clip0_61_320">
          <rect width="20" height="20" fill="white"/>
          </clipPath>
          </defs>
          </svg>

          </a>
          <a href="#" className="text-[#213A59] hover:text-gray-600">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_61_322)">
<path d="M11.7578 10C11.7578 10.9708 10.9708 11.7578 10 11.7578C9.02924 11.7578 8.24219 10.9708 8.24219 10C8.24219 9.02924 9.02924 8.24219 10 8.24219C10.9708 8.24219 11.7578 9.02924 11.7578 10Z" fill="#213A59"/>
<path d="M12.9688 4.6875H7.03125C5.73883 4.6875 4.6875 5.73883 4.6875 7.03125V12.9688C4.6875 14.2612 5.73883 15.3125 7.03125 15.3125H12.9688C14.2612 15.3125 15.3125 14.2612 15.3125 12.9688V7.03125C15.3125 5.73883 14.2612 4.6875 12.9688 4.6875ZM10 12.9297C8.38455 12.9297 7.07031 11.6154 7.07031 10C7.07031 8.38455 8.38455 7.07031 10 7.07031C11.6154 7.07031 12.9297 8.38455 12.9297 10C12.9297 11.6154 11.6154 12.9297 10 12.9297ZM13.3594 7.22656C13.0357 7.22656 12.7734 6.96426 12.7734 6.64062C12.7734 6.31699 13.0357 6.05469 13.3594 6.05469C13.683 6.05469 13.9453 6.31699 13.9453 6.64062C13.9453 6.96426 13.683 7.22656 13.3594 7.22656Z" fill="#213A59"/>
<path d="M14.7266 0H5.27344C2.36572 0 0 2.36572 0 5.27344V14.7266C0 17.6343 2.36572 20 5.27344 20H14.7266C17.6343 20 20 17.6343 20 14.7266V5.27344C20 2.36572 17.6343 0 14.7266 0ZM16.4844 12.9688C16.4844 14.9072 14.9072 16.4844 12.9688 16.4844H7.03125C5.09277 16.4844 3.51562 14.9072 3.51562 12.9688V7.03125C3.51562 5.09277 5.09277 3.51562 7.03125 3.51562H12.9688C14.9072 3.51562 16.4844 5.09277 16.4844 7.03125V12.9688Z" fill="#213A59"/>
</g>
<defs>
<clipPath id="clip0_61_322">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

          </a>
          <a href="#" className="text-[#213A59] hover:text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" className="text-[#213A59] hover:text-gray-600">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_61_330)">
<path d="M10.6689 9.65857L15.1696 16.0962H13.3225L9.64982 10.8431V10.8428L9.11061 10.0716L4.82031 3.93469H6.66742L10.1297 8.88742L10.6689 9.65857Z" fill="#213A59"/>
<path d="M17.839 0H2.16104C0.967563 0 0 0.967563 0 2.16104V17.839C0 19.0324 0.967563 20 2.16104 20H17.839C19.0324 20 20 19.0324 20 17.839V2.16104C20 0.967563 19.0324 0 17.839 0ZM12.7566 16.9604L9.0401 11.5514L4.38696 16.9604H3.18435L8.50611 10.7746L3.18435 3.02934H7.24336L10.7627 8.15126L15.1689 3.02934H16.3715L11.2968 8.92828H11.2965L16.8156 16.9604H12.7566Z" fill="#213A59"/>
</g>
<defs>
<clipPath id="clip0_61_330">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

          </a>
          <a href="#" className="text-[#213A59] hover:text-gray-600">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_61_333)">
<path d="M8.71436 8.03174V11.6825L12.0794 9.87301L8.71436 8.03174Z" fill="#213A59"/>
<path d="M14.9841 0H5C2.25397 0 0 2.25397 0 5.01587V15C0 17.746 2.25397 20 5 20H14.9841C17.746 20 20 17.746 20 14.9841V5.01587C20 2.25397 17.746 0 14.9841 0ZM16.1905 10.4921C16.1905 11.5397 16.0952 12.6032 16.0952 12.6032C16.0952 12.6032 15.9841 13.4921 15.619 13.8889C15.1429 14.4127 14.619 14.4127 14.381 14.4444C12.6349 14.5714 10.0159 14.5873 10.0159 14.5873C10.0159 14.5873 6.7619 14.5397 5.7619 14.4444C5.49206 14.3968 4.85714 14.4127 4.38095 13.8889C4 13.4921 3.90476 12.6032 3.90476 12.6032C3.90476 12.6032 3.80952 11.5397 3.80952 10.4921V9.50794C3.80952 8.46032 3.90476 7.39683 3.90476 7.39683C3.90476 7.39683 4.01587 6.50794 4.38095 6.11111C4.85714 5.5873 5.38095 5.57143 5.61905 5.53968C7.38095 5.4127 10 5.39683 10 5.39683C10 5.39683 12.619 5.4127 14.3651 5.53968C14.6032 5.57143 15.1429 5.5873 15.619 6.09524C16 6.49206 16.0952 7.39683 16.0952 7.39683C16.0952 7.39683 16.1905 8.46032 16.1905 9.50794V10.4921Z" fill="#213A59"/>
</g>
<defs>
<clipPath id="clip0_61_333">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

          </a>
        </div>
        
        <div className="flex items-center">
          <img src="/LogoIcon1.png" alt="Logo" className="w-8 h-8 mr-2" />
          <span className="font-roboto font-bold text-2xl mr-2 text-[#213A59]">Home Service Bureau</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;