import React from 'react';

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
      <div className="text-sm text-[#0F1629]">
        {currentPage}
      </div>
    </div>
  );
}

export default PageHolder;
