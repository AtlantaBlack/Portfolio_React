import React, { useState } from 'react';
import NavBar from './NavBar';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

const PortfolioContainer = () => {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
};

export default PortfolioContainer;
