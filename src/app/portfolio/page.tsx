'use client';

import React from 'react';
import usePortfolioData from '@/hooks/usePortfolioData';
import LoadingScreen from '@/components/LoadingScreen';
import PortfolioItem from '@/components/PortfolioItem';
import PortfolioSection from '@/components/PortfolioSection';

/**
 * Portfolio component that displays a portfolio of projects.
 * It consists of a main featured project and two scrollable sections.
 */
const Portfolio = () => {
  // Custom hook to fetch portfolio data
  const { items, loading } = usePortfolioData();

  // Show loading screen while the data is being fetched
  if (loading) {
    return <LoadingScreen />;
  }

  // Exclude the first item and prepare for continuous scrolling
  const scrollItems = items.slice(1);

  return (
    <div className="flex h-screen">
      {/* Main featured project */}
      <div className="w-6/12 h-full p-4">
        {items[0] && <PortfolioItem item={items[0]} className="h-full" />}
      </div>
      {/* Scrollable section with projects scrolling down */}
      <PortfolioSection items={scrollItems} scrollDirection="down" />
      {/* Scrollable section with projects scrolling up */}
      <PortfolioSection items={scrollItems} scrollDirection="up" />
    </div>
  );
};

export default Portfolio;
