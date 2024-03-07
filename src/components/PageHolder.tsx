import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface PageHolderProps {
  currentPage?: string;
}

const PageHolder: React.FC<PageHolderProps> = ({ currentPage = 'Bitcoin' }) => {
  const location = useLocation();
  console.log(currentPage);
  return (
    <div className="flex lg:pl-14 ml-4 pt-4">
      <div className="text-sm text-[#3E5765]">Cryptocurrencies</div>
      <div className="text-sm text-[#3E5765]">{' >> '}</div>
      <NavLink
        to="/btc"
        className={`text-md mr-3 ml-3 ${
          location.pathname === '/btc' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700'
        }`}
      >
        Bitcoin
      </NavLink>
      <NavLink
        to="/eth"
        className={`text-md mr-3 ${
          location.pathname === '/eth' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700'
        }`}
      >
        Ethereum
      </NavLink>
      <NavLink
        to="/opul"
        className={`text-md ${
          location.pathname === '/opul' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700'
        }`}
      >
        Opulous
      </NavLink>
    </div>
  );
};

export default PageHolder;
