import { Link } from "react-router-dom";

const Card = ({ item }) => {
    const { name, image, role, des } = item;
    return (
        <div>
            <div className="mx-auto">
                <img className="hover:shadow h-[160px] w-[150px]" src={image} alt="" />
                {/* TODO: Every member have their own personal details and experience. */}
                <Link><h2 className="text-black font-bold text-2xl hover:underline mt-2">{name}</h2></Link>
                <h3 className="text-blue-600 font-bold text-xl mb-2">{role}</h3>
                <h3 className="text-black">{des}</h3>
            </div>
        </div>
    );
};

export default Card;