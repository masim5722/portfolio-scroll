// Import the Portfolio component from the specified path
import Portfolio from './portfolio/page';

// Define the HomePage functional component
export default function HomePage() {
  return (
    // Main content area of the HomePage
    <main>
      {/* Render the Portfolio component inside the main element */}
      <Portfolio />
    </main>
  );
}
