import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <h5 className="footer-brand uppercase text-lg mb-2">About Us</h5>
            <p className="footer-text text-gray-600">
              PARK+ is an Automated Parking Management System (APMS) designed to revolutionize the way parking providers manage their facilities.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <h5 className="footer-brand uppercase text-lg mb-2">Features</h5>
            <ul className="footer-links list-none mb-0">
              <li className="mb-2">
                <i className="fas fa-check text-green-600 mr-2" />
                Real-time data integration
              </li>
              <li className="mb-2">
                <i className="fas fa-check text-green-600 mr-2" />
                Automated bookings and management
              </li>
              <li className="mb-2">
                <i className="fas fa-check text-green-600 mr-2" />
                Optimized parking space utilization
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <h5 className="footer-brand uppercase text-lg mb-2">Contact Us</h5>
            <p className="footer-text text-gray-600">
              Get in touch with us to learn more about PARK+ and how it can benefit your parking facility.
            </p>
            <a
              href="mailto:info@parkplus.com"
              className="footer-btn text-blue-600 hover:text-blue-800"
            >
              info@parkplus.com
            </a>
          </div>
        </div>
        <div className="footer-actions text-center text-gray-600">
          &copy; 2024 PARK+. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;