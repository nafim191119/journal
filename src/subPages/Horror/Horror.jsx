import { useEffect, useState } from "react";
import CardH from "./CardH";

const Horror = () => {
    const [horror, setHorror] = useState([]);
    useEffect(() => {
        fetch('/public/horror.json')
            .then(res => res.json())
            .then(data => setHorror(data))
    }, []);

    return (
        <div>
            <div className="bg-gray-100">
                <h1 className="text-3xl uppercase underline font-bold pt-8 mb-8 text-center text-black">Horror</h1>
                <div>
                    {
                        horror.map(item => <CardH item={item} key={item}></CardH>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Horror;