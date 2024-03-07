import React from 'react';
import { NavLink } from 'react-router-dom';

interface PageHolderProps {
  currentPage?: string;
}

const PageHolder: React.FC<PageHolderProps> = ({ currentPage = 'Bitcoin' }) => {
  return (
    <div className="flex lg:pl-14 ml-4 pt-4">
      <div className="text-sm text-[#3E5765]">
        Cryptocurrencies
      </div>
      <div className="text-sm text-[#3E5765]">
        {' >> '} 
      </div>
      <NavLink to="/btc" className={`text-md text-${currentPage === 'Bitcoin' ? 'blue-500' : '#0F1629'} mr-3 ml-3`}>
        Bitcoin
      </NavLink>
      <NavLink to="/eth" className={`text-md text-${currentPage === 'Ethereum' ? 'blue-500' : '#0F1629'} mr-3`}>
        Ethereum
      </NavLink>
      <NavLink to="/opul" className={`text-md text-${currentPage === 'Opulous' ? 'blue-500' : '#0F1629'}`}>
        Opulous
      </NavLink>
    </div>
  );
}

export default PageHolder;
