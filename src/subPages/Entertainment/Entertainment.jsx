
import useLoadData from "../../hooks/LoadData/useLoadData";
import CardC from "../Current/CardC";

const Entertainment = () => {
    const [journal] = useLoadData();
    const entertainment = journal.filter(item => item.category === 'Entertainment');
    
    return (
        <div>
            <div className="bg-gray-100">
                <h1 className="text-3xl uppercase underline font-bold pt-8 mb-8 text-center text-black">Entertainment</h1>
                <div>
                    {
                        entertainment.map(item => <CardC item={item} key={item}></CardC>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Entertainment;