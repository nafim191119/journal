
const Count = () => {
    return (
        <div>
            <div className="stats shadow flex justify-center items-center bg-white font-bold">
                <div className="stat place-items-center text-sm">
                    <div className="stat-title text-black">Users</div>
                    <div className="stat-value text-secondary">4.2k+</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div className="stat place-items-center text-sm">
                    <div className="stat-title text-black">Website Views</div>
                    <div className="stat-value text-black">1k+</div>
                    <div className="stat-desc text-black">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default Count;