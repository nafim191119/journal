import useLoadData from "../../hooks/LoadData/useLoadData";
import CardC from "../Current/CardC";

const Horror = () => {
    const [journal] = useLoadData();
    console.group(journal);
    const horror = journal.filter(item => item.category === 'Horror');
    console.log(horror);

    return (
        <div>
            <div className="bg-gray-100">
                <h1 className="text-3xl uppercase underline font-bold pt-8 mb-8 text-center text-black">Horror</h1>
                <div>
                    {
                        horror.map(item => <CardC item={item} key={item}></CardC>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Horror;