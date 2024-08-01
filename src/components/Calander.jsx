
const Calander = () => {
    const date = new Date().getDate();
    const month = new Date().getMonth()+1;
    const year = new Date().getFullYear();

    return (
        <div className="text-yellow-100">
            {date}-0{month}-{year}
        </div>
    );
};

export default Calander;