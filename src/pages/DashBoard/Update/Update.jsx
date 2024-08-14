import { useState } from 'react';

const Update = () => {
    // Define the initial state for form data
    const initialState = {
        date: '',
        authorName: '',
        title: '',
        tags: '',
        content: '',
        popular: false,
        file: null,
    };

    // Initialize state for form data
    const [formData, setFormData] = useState(initialState);

    // Handle changes for text, textarea, and checkbox inputs
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Handle changes for file input
    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0],
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Log form data to the console
        console.log('Form Data:', formData);

        // Reset form data to initial state
        setFormData(initialState);
    };

    return (
        <div className="p-4 md:p-8 lg:p-16">
            <div className="w-full max-w-xl mx-auto bg-white shadow-md rounded p-6">
                <form className="card-body" onSubmit={handleSubmit}>
                    {/* Date Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Date</span>
                        </label>
                        <input
                            type="text"
                            name="date"
                            placeholder="Date"
                            className="input input-bordered bg-white"
                            required
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Author Name Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Author Name</span>
                        </label>
                        <input
                            type="text"
                            name="authorName"
                            placeholder="Author Name"
                            className="input input-bordered bg-white"
                            required
                            value={formData.authorName}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Title Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Title</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            className="input input-bordered bg-white"
                            required
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Tags Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Tags</span>
                        </label>
                        <input
                            type="text"
                            name="tags"
                            placeholder="Tags"
                            className="input input-bordered bg-white"
                            value={formData.tags}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Content Textarea */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Content</span>
                        </label>
                        <textarea
                            name="content"
                            placeholder="Content"
                            className="textarea textarea-bordered bg-white w-full resize-y min-h-[100px] h-auto"
                            required
                            value={formData.content}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    {/* File Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">File</span>
                        </label>
                        <input
                            type="file"
                            className="file-input w-full max-w-sm bg-white"
                            onChange={handleFileChange}
                        />
                    </div>

                    {/* Popular Checkbox */}
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text text-2xl text-black">Popular?</span>
                            <input
                                type="checkbox"
                                name="popular"
                                className="checkbox checkbox-primary"
                                checked={formData.popular}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="form-control mt-6 w-full flex justify-end">
                        <button type="submit" className="btn btn-secondary w-full md:w-auto">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
