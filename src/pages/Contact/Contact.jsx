
const Contact = () => {
    return (
        <div className="bg-gray-100 text-center">
            <h1 className="pt-8 text-4xl font-bold uppercase underline text-black">Get in Touch</h1>
            <div className="md:flex justify-evenly items-center py-20 text-white px-auto">
                <div className="bg-pink-900 w-80 h-48 py-12 rounded-lg shadow">
                    <h1>Icon</h1>
                    <h1 className="text-3xl font-bold uppercase mb-2">Location</h1>
                    <p className="text-lg font-semibold">Mirpur, Dhaka, Bangladesh</p>
                </div>
                <div className="bg-green-900 w-80 h-48 py-12 rounded-lg shadow">
                    <h1>Icon</h1>
                    <h1 className="text-3xl font-bold uppercase mb-2">Email</h1>
                    <p className="text-lg font-semibold">xyzabc@gamil.com</p>
                </div>
                <div className="bg-blue-900 w-80 h-48 py-12 rounded-lg shadow">
                    <h1>Icon</h1>
                    <h1 className="text-3xl font-bold uppercase mb-2">Phone</h1>
                    <p className="text-lg font-semibold">01*********</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;