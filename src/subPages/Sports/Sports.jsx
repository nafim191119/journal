import { useEffect, useState } from "react";
import CardS from "./CardS";

const Sports = () => {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        fetch('/public/sport.json')
            .then(res => res.json())
            .then(data => setSports(data))
    }, []);
    return (
        <div>
            <div className="bg-gray-100">
                <h1 className="text-3xl uppercase underline font-bold pt-8 mb-8 text-center text-black">Sports</h1>
                <div>
                    {
                        sports.map(item => <CardS item={item} key={item}></CardS>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Sports;