import { useEffect, useState } from "react";
import CardR from "./CardR";

const Romantic = () => {
    const [romantic, setRomantic] = useState([]);
    useEffect(() => {
        fetch('/public/romantic.json')
            .then(res => res.json())
            .then(data => setRomantic(data))
    }, []);

    return (
        <div className="bg-gray-100">
            <h1 className="text-3xl uppercase underline font-bold pt-8 mb-8 text-center text-black">Romantic</h1>
            <div>
                {
                    romantic.map(item => <CardR item={item} key={item}></CardR>)
                }
            </div>
        </div>
    );
};

export default Romantic;