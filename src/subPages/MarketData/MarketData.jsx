const marketData = [
    { index: 'SPX', value: '5,446.68', change: '-1.37%' },
    { index: 'IXIC', value: '17,194.15', change: '-2.30%' },
    { index: 'DJI', value: '40,347.97', change: '-1.21%' },
    { index: 'STOXX', value: '511.83', change: '-1.23%' },
    { index: 'FTSE', value: '8,283.36', change: '-1.01%' },
    { index: 'N225', value: '38,126.33', change: '-2.49%' },
];

const MarketData = () => {
    return (
        <div>
            <div className="bg-gray-100 px-8 shadow-md rounded-lg md:flex justify-between items-center">
                <div className="flex flex-wrap justify-between items-center gap-2">
                    {marketData.map((data) => (
                        <div key={data.index} className="flex flex-col items-center text-center text-sm md:flex-row md:space-x-2 md:text-left">
                            <div className="font-bold text-red-600">{data.index}</div>
                            <div className="text-gray-700">{data.value}</div>
                            <div className="text-red-600">{data.change}</div>
                        </div>
                    ))}
                </div>
                <div className="text-right mt-2 text-blue-600">
                    <a href="https://www.lseg.com">Get real-time market data from LSEG</a>
                </div>
            </div>
        </div>
    );
};

export default MarketData;