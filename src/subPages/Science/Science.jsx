import { useEffect, useState } from "react";
import CardSci from "./CardSci";

const Science = () => {
    const [science, setScience] = useState([]);
    useEffect(() => {
        fetch('/public/science.json')
            .then(res => res.json())
            .then(data => setScience(data))
    }, []);
    return (
        <div>
            <div className="bg-gray-100">
                <h1 className="text-3xl uppercase underline font-bold pt-8 mb-8 text-center text-black">Science</h1>
                <div>
                    {
                        science.map(item => <CardSci item={item} key={item}></CardSci>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Science;