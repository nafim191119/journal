import { useEffect, useState } from "react";
import Card from "../../components/Card";

const Member = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('members.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, []);
    return (
        <div className="bg-gray-100 px-16">
            <h1 className="text-black font-bold text-4xl uppercase pt-8 underline text-center">Our Team</h1>
            <div className="grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 py-4 justify-center items-center gap-4">
                {
                    members.map(item => <Card 
                    key={item.id}
                    item={item}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Member;