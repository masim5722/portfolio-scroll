// Import React library
import React from 'react';
// Import CSS module styles for the loading screen
import styles from './loadingScreen.module.css';

// Define the LoadingScreen functional component
const LoadingScreen = () => {
  return (
    // Container for the loading screen
    <div className={styles.loadingContainer}>
      {/* Spinner element for visual loading indication */}
      <div className={styles.spinner}></div>
      {/* Text indicating that content is loading */}
      <h1 className={styles.loadingText}>Loading...</h1>
    </div>
  );
};

// Export the LoadingScreen component as the default export
export default LoadingScreen;
