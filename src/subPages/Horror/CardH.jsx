import '@fortawesome/fontawesome-free/css/all.min.css';
import "../Horror/fontH.css";

const CardH = ({ item }) => {
    const { id, title, category, author, date_published, content, tags, popular, img } = item;
    return (
        <div>
            {
                img ?
                    <>
                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 px-10 pb-8 gap-10 items-center'>
                            <div className="">
                                <div className="flex justify-start items-center gap-3 pb-1 text-gray-600 text-sm">
                                    <p>{date_published}</p>
                                    <div>
                                        {tags?.map((tag, index) => (
                                            <span className="text-sm font-bold text-indigo-700 underline" key={index} style={{ marginRight: "16px" }}>
                                                {tag ? tag : null}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-red-500">{popular && (
                                    <p className="text-red-500  pb-2 font-semibold">
                                        <i className="fas fa-fire"></i> popular
                                    </p>
                                )}</p>
                                <div className="text-3xl text-black font-semibold pb-4">{title}</div>
                                <div className="pb-2 text-xl text-black tiro-bangla-regular">{content}</div>
                                <div className=''>
                                    <h1 className="text-indigo-700 font-bold text-2xl author-name">{author}</h1>
                                </div>
                                <div className="divider"></div>
                            </div>
                            <div className='pr-10'>
                                <img className='w-[400px] rounded-lg' src={img} alt="" />
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="px-10 pb-8">
                            <div className="flex justify-start items-center gap-3 pb-1 text-gray-600 text-sm">
                                <p>{date_published}</p>
                                <div>
                                    {tags?.map((tag, index) => (
                                        <span className="text-sm font-bold text-indigo-700 underline" key={index} style={{ marginRight: "16px" }}>
                                            {tag ? tag : null}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-red-500">{popular && (
                                <p className="text-red-500  pb-2 font-semibold">
                                    <i className="fas fa-fire"></i> popular
                                </p>
                            )}</p>
                            <div className="text-3xl text-black font-semibold pb-4">{title}</div>
                            <div className="pb-2 text-xl text-black tiro-bangla-regular">{content}</div>
                            <div className=''>
                                <h1 className="text-indigo-700 font-bold text-2xl author-name">{author}</h1>
                            </div>
                            <div className="divider"></div>
                        </div>
                    </>
            }
        </div>
    );
};

export default CardH;
