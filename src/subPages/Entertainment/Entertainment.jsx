import { useEffect, useState } from "react";
import CardE from "./CardE";

const Entertainment = () => {
    const [entertainment, setEntertainment] = useState([]);
    useEffect(() => {
        fetch('/public/entertainment.json')
            .then(res => res.json())
            .then(data => setEntertainment(data))
    }, []);
    return (
        <div>
            <div className="bg-gray-100">
                <h1 className="text-3xl uppercase underline font-bold pt-8 mb-8 text-center text-black">Entertainment</h1>
                <div>
                    {
                        entertainment.map(item => <CardE item={item} key={item}></CardE>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Entertainment;