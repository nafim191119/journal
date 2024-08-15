// SignInPage.jsx
import { useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.currentUser) {
            navigate('/'); // Redirect to home page if user is already logged in
        }
    }, [navigate]);

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // Redirect or perform any other action on successful signup
            console.log("Signed up successfully!");
        } catch (error) {
            setError(error.message);
            console.error("Signup failed:", error);
        }
    };

    return (
        <div>
            <div className="hero bg-gray-100 py-10">
                <Helmet>
                    <title>তথ্যপ্রবাহ | SignIn</title>
                </Helmet>
                <div className="hero-content flex-col lg:flex-row-reverse text-black">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    </div>
                    <div className="card bg-gray-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered bg-white"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered bg-white"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </div>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
