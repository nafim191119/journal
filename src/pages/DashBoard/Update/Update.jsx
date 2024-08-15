import { useForm } from "react-hook-form";


const imgHostingToken = import.meta.env.VITE_Image_Upload_Token;

const Update = () => {
    const { register, handleSubmit, reset } = useForm();
    const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${imgHostingToken}`;
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.img[0]);

        fetch(imgHostingUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { author, author_info, category, content, date_published, popular, tags, title } = data;
                    const currentNewItem = { author, author_info, category, content, date_published, popular, tags, title, img: imgURL };
                    fetch('http://localhost:5000/current', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(currentNewItem)
                    })
                        .then(response => response.json())
                        .then(serverResponse => {
                            console.log('Server response:', serverResponse);
                        })
                        .catch(error => {
                            console.error('Error updating server:', error);
                        });
                }
        })
        .catch(error => {
            console.error('Error uploading image:', error);
        });
        reset();
    };

    return (
        <div className="p-4 md:p-8 lg:p-16">
            <div className="w-full max-w-xl mx-auto bg-blue-100 shadow-md rounded p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body" >
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-black">Date*</span>
                        </div>
                        <input {...register("date_published", { required: true })} type="text" placeholder="Date" className=" text-black input input-bordered w-full  bg-white" />
                    </label>
                    <div className="flex gap-4">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-semibold text-black">Title*</span>
                            </div>
                            <input {...register("title", { required: true })} type="text" placeholder="title" className="text-black input input-bordered w-full  bg-white" />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-semibold text-black">Category*</span>
                            </div>
                            <select defaultValue={"Pick one"} {...register("category", { required: true })} className="select select-bordered bg-white text-black">
                                <option disabled>Pick one</option>
                                <option>Current</option>
                                <option>Entertainment</option>
                                <option>Science</option>
                                <option>Planet of the Apes</option>
                                <option>Star Trek</option>
                            </select>
                        </label>
                    </div>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-black">Author Name*</span>
                        </div>
                        <input {...register("author", { required: true })} type="text" placeholder="Author Name" className="text-black input input-bordered w-full  bg-white" />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-black">Author Info</span>
                        </div>
                        <input {...register("author_info")} type="text" placeholder="Author Info" className="text-black input input-bordered w-full  bg-white" />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-black">Tags</span>
                        </div>
                        <input {...register("tags")} type="text" placeholder="Tags" className="text-black input input-bordered w-full  bg-white" />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-black">Content*</span>
                        </div>
                        <textarea {...register("content", { required: true })} name="content" placeholder="Content" className="text-black textarea textarea-bordered bg-white w-full resize-y min-h-[100px] h-auto" required></textarea>
                    </label>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text text-black text-xl font-semibold">Popular?</span>
                            <input {...register("popular", { required: true })} type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                        </label>
                    </div>
                    <input type="file" {...register("img")} className="file-input file-input-bordered file-input-primary w-full  bg-white mt-4" />

                    <input type="submit" className="btn  btn-secondary w-20 mx-auto" />
                </form>
            </div>
        </div>
    );
};

export default Update;
