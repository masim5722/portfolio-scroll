import { useState, useEffect } from 'react';

// Define the PortfolioItem interface
interface PortfolioItem {
    image: string;
    title: string;
    description: string;
    link: string;
}

// Custom hook to fetch portfolio data
const usePortfolioData = () => {
    const [items, setItems] = useState<PortfolioItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch portfolio data from the API
        fetch('/api/portfolio')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Data fetched:', data); // Debug log
                setItems(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching portfolio data:', error);
                setLoading(false);
            });
    }, []);

    return { items, loading };
};

export default usePortfolioData;
