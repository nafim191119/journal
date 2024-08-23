import useLoadData from "../../hooks/LoadData/useLoadData";
import CardC from "../Current/CardC";

const Sports = () => {
    const [journal] = useLoadData();
    const sports = journal.filter(item => item.category === 'Sports');

    return (
        <div>
            <div className="bg-gray-100">
                <h1 className="text-3xl uppercase underline font-bold pt-8 mb-8 text-center text-black">Sports</h1>
                <div>
                    {
                        sports.map(item => <CardC item={item} key={item}></CardC>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Sports;