import '@fortawesome/fontawesome-free/css/all.min.css';
import "../Current/fontC.css";

const CardC = ({ item }) => {
    const { id, title, category, author, date_published, content, tags, popular, img, author_info } = item;
    return (
        <div>
            {
                img ?
                    <>
                        <div className='px-10 pb-8 gap-10 items-center'>
                            <div className="">
                                <div className="flex pb-1 text-gray-600 text-sm gap-3">
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
                                <div className="text-3xl text-black font-semibold pb-2">{title}</div>
                                <div className='py-6'>
                                    <img className='w-[600px] h-[400px] rounded-lg' src={img} alt="" />
                                </div>
                                <div className="pb-2 text-xl text-black tiro-bangla-regular">{content}</div>
                                <div className=''>
                                    <h1 className="text-indigo-700 font-bold text-2xl author-name">{author}</h1>
                                    {author_info ? <h1 className="text-black font-bold author-name">{author_info}</h1> : null}
                                </div>
                            </div>
                            <div className="divider"></div>
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
                                {author_info ? <h1 className="text-black font-bold text-2xl author-name">{author_info}</h1> : null}
                            </div>
                            <div className="divider"></div>
                        </div>
                    </>
            }
        </div >
    );
};

export default CardC;