import useLoadData from "../../hooks/LoadData/useLoadData";
import CardC from "../Current/CardC";

const Science = () => {
    const [journal] = useLoadData();
    const science = journal.filter(item => item.category === 'Science');
    return (
        <div>
            <div className="bg-gray-100">
                <h1 className="text-3xl uppercase underline font-bold pt-8 mb-8 text-center text-black">Science</h1>
                <div>
                    {
                        science.map(item => <CardC item={item} key={item}></CardC>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Science;