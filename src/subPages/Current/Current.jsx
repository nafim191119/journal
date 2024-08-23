import useLoadData from "../../hooks/LoadData/useLoadData";
import CardC from "./CardC";

const Current = () => {
    const [journal] = useLoadData();
    const current = journal.filter(item => item.category === 'Current');

    return (
        <div>
            <div className="bg-gray-100">
            <h1 className="text-3xl uppercase underline font-bold pt-8 mb-8 text-center text-black">Current News</h1>
                <div>
                    {
                        current.map(item => <CardC item={item} key={item._id}></CardC>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Current;