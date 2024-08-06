import { useEffect, useState } from "react";
import CardR from "./CardR";

const Romantic = () => {
    const [romantic, setRomantic] = useState([]);
    const [filteredRomantic, setFilteredRomantic] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState('');


    useEffect(() => {
        fetch('/public/romantic.json')
            .then(res => res.json())
            .then(data => setRomantic(data))
    }, []);

    useEffect(() => {
        if (selectedMonth === '') {
            setFilteredRomantic(romantic);
        } else {
            const filtered = romantic.filter(item => new Date(item.date_published).getMonth() + 1 === parseInt(selectedMonth));
            setFilteredRomantic(filtered);
        }
    }, [selectedMonth, romantic]);

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    return (
        <div className="bg-gray-100">
            <h1 className="text-3xl uppercase underline font-bold pt-8 mb-8 text-center text-black">Romantic</h1>

            <div className="text-end mb-8 pr-8">
                <select onChange={handleMonthChange} value={selectedMonth} className="p-2 border rounded-lg bg-white text-black">
                    <option value="">All Months</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
            </div>

            <div>
                {
                    filteredRomantic.map(item => <CardR item={item} key={item}></CardR>)
                }
            </div>
        </div>
    );
};

export default Romantic;