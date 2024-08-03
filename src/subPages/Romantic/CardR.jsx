import '@fortawesome/fontawesome-free/css/all.min.css';
import "../Romantic/font.css"
import { useState } from 'react';

const CardR = ({ item }) => {
    const { id, title, category, author, date_published, content, tags, popular } = item;

    // const [likes, setLikes] = useState(0);

    // const handleLikeClick = () => {
    //     setLikes(likes + 1);
    // };

    return (
        <div className="px-10 pb-12">
            <div className="flex justify-start items-center gap-3 pb-1 text-gray-600 text-sm">
                <p>{date_published}</p>
                <div>
                    {tags.map((tag, index) => (
                        <span className="text-sm font-bold text-indigo-700" key={index} style={{ marginRight: "5px" }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <p className="text-red-500">{popular && (
                <p className="text-red-500 py-1 font-semibold">
                    <i className="fas fa-fire"></i> popular
                </p>
            )}</p>
            <div className="text-3xl text-black font-semibold pb-4">{title}</div>
            <div className="pb-4 text-xl text-black tiro-bangla-regular">{content}</div>
            <div>
                <h1 className="text-indigo-700 font-bold text-2xl author-name">{author}</h1>
                {/* <button onClick={handleLikeClick} className="love-button flex items-center gap-2 mt-2">
                    <i className="fas fa-heart text-red-500"></i>
                    <span>{likes}</span>
                </button> */}
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default CardR;