import { useEffect, useState } from "react";

const useLoadData = () => {
    const [journal, setJournal] = useState([]);
    const [loading, setLoading] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allData')
            .then(res => res.json())
            .then(data =>{
                const sortedData = data.sort((a, b) => new Date(b.date_published) - new Date(a.date_published));
                setJournal(data, sortedData);
                setLoading(false)
            });
    }, [])
    return [journal, loading]
};

export default useLoadData;