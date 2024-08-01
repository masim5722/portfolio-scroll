import React from 'react';
import PortfolioItem from '../PortfolioItem';
import styles from './portfolioSection.module.css';

interface ScrollableSectionProps {
  items: {
    image: string;
    title: string;
    description: string;
    link: string;
  }[];
  scrollDirection: 'up' | 'down';
}

const PortfolioSection: React.FC<ScrollableSectionProps> = ({
  items,
  scrollDirection,
}) => {
  // Determine the appropriate CSS class for the scrolling direction
  const scrollClass =
    scrollDirection === 'up'
      ? styles.scrollContentUp
      : styles.scrollContentDown;

  return (
    // Main container for the portfolio section with dynamic scrolling direction classes
    <div
      className={`w-3/12 h-full overflow-hidden p-4 ${
        scrollDirection === 'up' ? styles.scrollUp : styles.scrollDown
      }`}
    >
      {/* Container for the scrollable content */}
      <div className={scrollClass}>
        {/* Duplicate the items to ensure seamless scrolling */}
        {items.concat(items).map((item, index) => (
          <PortfolioItem key={index} item={item} containerClassName="mb-8" />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
