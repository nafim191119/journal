import { useEffect, useState } from "react";
import CardC from "./CardC";

const Current = () => {
    const [current, setCurrent] = useState([]);
    useEffect(() => {
        fetch('/public/current.json')
            .then(res => res.json())
            .then(data => {
                const sortedData = data.sort((a, b) => new Date(b.date_published) - new Date(a.date_published));
                setCurrent(sortedData);
            });
    }, []);

    return (
        <div>
            <div className="bg-gray-100">
                <h1 className="text-3xl uppercase underline font-bold pt-8 mb-8 text-center text-black">বর্তমান ঘটনা</h1>
                <div>
                    {
                        current.map(item => <CardC item={item} key={item}></CardC>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Current;