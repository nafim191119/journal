import { FaGoogle } from 'react-icons/fa';
import { auth, provider, signInWithPopup } from '../../firebase/firebase.config'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {

    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            // The signed-in user info.
            const user = result.user;
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Login Successfully",
                showConfirmButton: false,
                timer: 1500
              });
            console.log('User info:', user);
            navigate('/'); // Redirect to home page after successful login
        } catch (error) {
            console.error('Google Sign-In Error:', error.message);
        }
    };
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div className='divider'></div>
                <button className="btn btn-circle btn-outline" onClick={handleGoogleSignIn}>
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;