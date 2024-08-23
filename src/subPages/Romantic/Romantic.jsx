import useLoadData from "../../hooks/LoadData/useLoadData";
import CardC from "../Current/CardC";

const Romantic = () => {
    const [journal] = useLoadData();
    const romantic = journal.filter(item => item.category === 'Romantic');

    return (
        <div className="bg-gray-100">
            <h1 className="text-3xl uppercase underline font-bold pt-8 mb-8 text-center text-black">Romantic</h1>
            <div>
                {
                    romantic.map(item => <CardC item={item} key={item}></CardC>)
                }
            </div>
        </div>
    );
};

export default Romantic;