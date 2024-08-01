import React from 'react';

interface PortfolioItemProps {
  item: {
    image: string;
    title: string;
    description: string;
    link: string;
  };
  className?: string;
  containerHeight?: string;
  containerClassName?: string; // New prop for additional container class
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  item,
  className = '',
  containerHeight = 'h-[50vh]',
  containerClassName = '', // New prop default value
}) => (
  // Container for the portfolio item with optional className and containerHeight
  <div
    className={`group relative overflow-hidden rounded-lg shadow-lg ${containerHeight} ${className} ${containerClassName}`} // Apply containerClassName
  >
    {/* Image for the portfolio item */}
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    {/* Overlay with title, description, and link that appears on hover */}
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
      <div className="text-center text-white">
        <h2 className="text-2xl font-bold">{item.title}</h2>
        <p className="mt-2">{item.description}</p>
        <a
          href={item.link}
          target="_blank"
          className="mt-4 inline-block bg-blue-500 py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  </div>
);

export default PortfolioItem;
