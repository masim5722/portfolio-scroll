// Import global CSS styles for the entire application
import '../styles/global.css';
// Import the ReactNode type from React for type checking
import { ReactNode } from 'react';

// Define a functional component named RootLayout
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // The root HTML element with language set to English
    <html lang="en">
      <body>
        {/* Render the children passed to this component */}
        {children}
      </body>
    </html>
  );
}
