import { useEffect, useState } from "react";

// Hook to load data from JSON file and handle category filtering
const useLoadData = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    
    // Fetch the data and sort it by date_published
    useEffect(() => {
        fetch('/romantic.json') // Ensure this path correctly points to your JSON file
            .then(res => res.json())
            .then(fetchedData => {
                const sortedData = fetchedData.sort(
                    (a, b) => new Date(b.date_published) - new Date(a.date_published)
                );
                setData(sortedData);
                setFilteredData(sortedData); // Set initial filtered data
            })
            .catch(err => console.error("Failed to fetch data:", err));
    }, []);

    // Function to filter data by category
    const filterByCategory = (category) => {
        const filtered = data.filter(item => item.category.toLowerCase() === category.toLowerCase());
        setFilteredData(filtered);
    };

    return [filteredData, filterByCategory];
};

export default useLoadData;
